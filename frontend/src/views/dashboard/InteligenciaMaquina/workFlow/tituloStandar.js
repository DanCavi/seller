import React from 'react';
//Import Componentes
import { Typography } from '@mui/material';

function TituloStandar({ titulo, marginLeft }) {
  return (
    <div>
      <Typography
        sx={{
          color: '#6a6c6f',
          fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
          fontSize: '13px',
          fontWeight: 700,
          marginBottom: 1,
          marginLeft: { marginLeft }
        }}
      >
        {titulo}
      </Typography>
    </div>
  );
}

export default TituloStandar;
