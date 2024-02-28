import React from 'react';
//Import Componentes
import { PropTypes } from 'prop-types';
import { Typography } from '@mui/material';

function TituloStandar({ titulo, marginLeft, fontSize }) {
  return (
    <div>
      <Typography
        sx={{
          width: '100%',
          color: '#6a6c6f',
          fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
          fontSize: `${fontSize}`,
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
TituloStandar.propType = {
  titulo: PropTypes.string,
  fontSize: PropTypes.string,
  marginLeft: PropTypes.number
};

TituloStandar.defaultProps = {
  fontSize: '13px'
};
export default TituloStandar;
