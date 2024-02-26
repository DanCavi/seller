import React from 'react';
import { Button } from '@mui/material';
//Theme
import { useTheme } from '@mui/material/styles';

function AccionDerivarEjecutivo() {
  const onDragStart = (event) => {
    event.dataTransfer.setData('text/plain', 'accion2'); // Puedes usar cualquier tipo MIME que desees.
  };
  const theme = useTheme();
  return (
    <>
      <Button
        variant="outlined"
        size="small"
        draggable
        onDragStart={onDragStart}
        style={{ cursor: 'grab', width: '100%' }}
        sx={{
          borderRadius: 5,
          backgroundColor: `${theme.palette.warning.dark}`,
          borderColor: `${theme.palette.warning.dark}`,
          boxShadow: `0px 4px 4px ${theme.palette.grey[300]}`,
          color: 'white',
          fontWeight: 600,
          transition: 'all 0.3s ease', // Transición suave al cambiar los estilos
          '&:hover': {
            backgroundColor: 'white',
            color: theme.palette.warning.dark,
            borderColor: theme.palette.warning.dark,
            boxShadow: `0px -4px 4px ${theme.palette.grey[300]}`
          }
        }}
      >
        Derivar ejecutivo
      </Button>
    </>
  );
}

export default AccionDerivarEjecutivo;
