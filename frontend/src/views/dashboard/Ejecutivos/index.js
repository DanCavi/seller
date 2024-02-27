// import { Typography } from '@mui/material';
import React from 'react';
// import MainCard from 'ui-component/cards/MainCard';
import { Card, Typography, Grid, Divider } from '@mui/material';

//IMPORT EJECUTIVOS
import EjecutivoCard from './components/CardEjecutivo';
//FIN IMPORT EJECUTIVOS
import { useTheme } from '@mui/material/styles';

const ejecutivos = [
  ['Maximiliano Bustamante', 10, 95, 20, 'Ejecutivo'],
  ['Andrés Peréz', 20, 65, 8, 'Ejecutivo comercial'],
  ['Luis Vasquez', 30, 98, 30, 'Gerente Comercial'],
  ['Mauricion Canales', 3, 30, 3, 'Gerente Riesgo']
];

function Ejecutivos() {
  const theme = useTheme();
  return (
    <>
      <Grid container mb={3} sx={{ width: '100%' }}>
        <Grid item sx={{ width: '100%' }}>
          <Card>
            <Grid item p={3}>
              <Typography variant="h3">
                <em>Lista de Ejecutivos</em>
              </Typography>
            </Grid>
            <Grid mb={2}>
              <Divider sx={{ border: '1px solid ', color: `${theme.palette.primary.main}` }} />
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {ejecutivos.map((index) => (
          <Grid item md={4} xs={12} key={index}>
            <EjecutivoCard
              nombre={index[0]}
              cantidadClientes={index[1]}
              porcentajeMetasCumplidas={index[2]}
              gestiones={index[3]}
              cargo={index[4]}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Ejecutivos;
