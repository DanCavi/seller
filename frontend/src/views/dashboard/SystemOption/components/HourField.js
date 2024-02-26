import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { IconClock } from '@tabler/icons-react';

// import { Button } from '@mui/material';
// import { IconCalendar } from '@tabler/icons-react';
registerLocale('es', es);

const HourField = () => {
  const [startHour, setStartHour] = useState(new Date());

  return (
    <DatePicker
      showIcon
      icon={<IconClock size={18} />}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      dateFormat='h:mm aa'
      timeCaption='Hora'
      locale="es"
      selected={startHour}
      onChange={
        (hour) => setStartHour(hour)
      }
    />
    
  );
};

export default HourField;
