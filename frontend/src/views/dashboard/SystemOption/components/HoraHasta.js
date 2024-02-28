import * as React from 'react';
import './style.css';
//componente
import { Typography } from '@mui/material';
// import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from 'dayjs';

function HoraHasta({ horaFinal, setHoraFinal }) {
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
          marginBottom: 1,
          width: '100%'
        }}
      >
        Hora de Termino
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileTimePicker
          className="myDatePicker"
          slotProps={{ textField: { size: 'small' } }}
          views={['hours', 'minutes']}
          label={'Hasta'}
          defaultValue={dayjs()}
          sx={{ width: '100%' }}
          value={horaFinal}
          onChange={(time) => setHoraFinal(time)}
        />
      </LocalizationProvider>
    </>
  );
}

export default HoraHasta;
