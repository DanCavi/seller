import * as React from 'react';
import './style.css';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { Typography } from '@mui/material';

function HoraDesde({ horaInicial, setHoraInicial }) {
  // const [value, setValue] = (React.useState < Dayjs) | (null > dayjs('2022-04-17T15:30'));
  return (
    <>
      <Typography
        mb={1}
        sx={{
          color: '#6a6c6f',
          fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
          fontSize: '13px',
          fontWeight: 700,
          marginBottom: 1
        }}
      >
        Hora de Inicio
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileTimePicker
          className="myDatePicker"
          slotProps={{ textField: { size: 'small' } }}
          defaultValue={dayjs()}
          views={['hours', 'minutes']}
          label={'Desde'}
          openTo="hours"
          sx={{ width: '100%' }}
          value={horaInicial}
          onChange={(time) => setHoraInicial(time)}
        />
      </LocalizationProvider>
    </>
  );
}

export default HoraDesde;
