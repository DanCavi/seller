import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
// import { Button } from '@mui/material';
// import { IconCalendar } from '@tabler/icons-react';
registerLocale('es', es);

const DateField = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      showIcon
      locale="es"
      selected={startDate}
      onChange={
        (date) => setStartDate(date)
      }
    />
    
  );
};

export default DateField;
