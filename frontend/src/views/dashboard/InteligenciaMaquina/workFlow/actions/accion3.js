import React from 'react';
import { Button } from '@mui/material';
//Theme
import { useTheme } from '@mui/material';

function Accion3() {
  const onDragStart = (event) => {
    event.dataTransfer.setData('text/plain', 'accion3'); // Puedes usar cualquier tipo MIME que desees.
  };

  //definir theme
  const theme = useTheme();
  return (
    <>
      <Button
        variant="outlined"
        size="small"
        draggable
        onDragStart={onDragStart}
        sx={{
          width: '100%',
          borderRadius: 5,
          backgroundColor: '#960019',
          borderColor: '#960019',
          boxShadow: `0px 4px 4px ${theme.palette.grey[300]}`,
          color: 'white',
          fontWeight: 600,
          transition: 'all 0.3s ease', // Transición suave al cambiar los estilos
          '&:hover': {
            backgroundColor: 'white',
            color: '#960019',
            borderColor: '#960019',
            boxShadow: `0px -4px 4px ${theme.palette.grey[300]}`
          }
        }}
        style={{ cursor: 'grab', width: '100%' }}
      >
        Ejecutar WebService
      </Button>
    </>
  );
}

export default Accion3;
