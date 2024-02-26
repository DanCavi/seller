import React from 'react';
import { TextField } from '@mui/material';
//Theme
//import { useTheme } from '@mui/material';

function Input() {
  const onDragStart = (event) => {
    event.dataTransfer.setData('text/plain', 'input'); // Puedes usar cualquier tipo MIME que desees.
  };

  //definir theme
  //const theme = useTheme();
  return (
    <>
      <TextField placeholder="Input" disabled draggable onDragStart={onDragStart} size="small" sx={{ cursor: 'grab' }} />
    </>
  );
}

export default Input;
