import React from 'react';
import { Button } from '@mui/material';
//Theme
import { useTheme } from '@mui/material';

function OperadorNoContiene() {
  const onDragStart = (event) => {
    event.dataTransfer.setData('text/plain', 'noContiene'); // Puedes usar cualquier tipo MIME que desees.
  };
  const theme = useTheme();
  return (
    <>
      <Button
        color="error"
        variant="outlined"
        size="small"
        draggable
        onDragStart={onDragStart}
        sx={{
          width: '100%',
          borderRadius: 5,
          backgroundColor: `${theme.palette.error.main}`,
          borderColor: `${theme.palette.error.main}`,
          boxShadow: `0px 4px 4px ${theme.palette.grey[300]}`,
          color: 'white',
          fontWeight: 600,
          transition: 'all 0.3s ease', // Transición suave al cambiar los estilos
          '&:hover': {
            backgroundColor: 'white',
            color: theme.palette.error.main,
            borderColor: theme.palette.error.main,
            boxShadow: `0px -4px 4px ${theme.palette.grey[300]}`
          }
        }}
        style={{ cursor: 'grab' }}
      >
        No Contiene
      </Button>
    </>
  );
}

export default OperadorNoContiene;
