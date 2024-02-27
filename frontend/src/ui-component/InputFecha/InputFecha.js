import React from 'react';
import './calendarStyle.css';
//Datepicker import
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function InputFecha({ onChange, value }) {
  return (
    <>
      {/* Seleccion Feriados */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="myDatePicker "
          sx={{ width: '100%' }}
          defaultValue={dayjs('2022-04-17')}
          slotProps={{ textField: { size: 'small' } }}
          value={value}
          onChange={onChange}
        />
      </LocalizationProvider>
      {/* Fin seleccion Feriados */}
    </>
  );
}
InputFecha.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func
};

export default InputFecha;
