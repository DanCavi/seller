import React from 'react';
import { Avatar, Tooltip } from '@mui/material';
//Theme
import { useTheme } from '@mui/material';

function OperadorStandar({ color, titulo, backgroundColor, textPlain, toolTip }) {
  const onDragStart = (event) => {
    event.dataTransfer.setData('text/plain', textPlain); // Puedes usar cualquier tipo MIME que desees.
  };

  //definir theme
  const theme = useTheme();
  return (
    <>
      <Tooltip title={`(${toolTip})`} placement="left">
        <Avatar
          variant="circular"
          size="small"
          draggable
          onDragStart={onDragStart}
          sx={{
            borderRadius: 5,
            backgroundColor: { backgroundColor },
            borderColor: { backgroundColor },
            boxShadow: `0px 4px 4px ${theme.palette.grey[300]}`,
            color: 'white',
            fontWeight: 600,
            transition: 'all 0.3s ease', // Transición suave al cambiar los estilos
            '&:hover': {
              backgroundColor: 'white',
              color: { color },
              border: `2px solid ${color}`,
              boxShadow: `0px -4px 4px ${theme.palette.grey[300]}`
            }
          }}
          style={{ cursor: 'grab' }}
        >
          {titulo}
        </Avatar>
      </Tooltip>
    </>
  );
}

export default OperadorStandar;
