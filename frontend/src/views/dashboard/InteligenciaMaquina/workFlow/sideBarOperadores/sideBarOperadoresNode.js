import React from 'react';
//import mui materials
import { Grid, Stack, Typography, Box } from '@mui/material';
//Operadores
import Igual from '../operadores/igualA';
import Mayor from '../operadores/mayor';
import Menor from '../operadores/menor';
import Contiene from '../operadores/contiene';
import NoContiene from '../operadores/noContiene';
import MayorIgual from '../operadores/mayorIgual';
import MenorIgual from '../operadores/menorIgual';
import Distinto from '../operadores/distintoA';
import OperadorY from '../operadores/&';
import OperadorO from '../operadores/o';
//import useTheme
import { useTheme } from '@mui/material';

function SideBarOperadores() {
  const theme = useTheme();
  return (
    <Grid item sx={{ width: '100%' }} md={1}>
      <Stack direction="column" spacing={2}>
        <Grid item md={12} sx={{ width: '100%', pl: 0.5 }} textAlign="center">
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '13px',
              color: theme.palette.grey[500]
            }}
          >
            Operadores
          </Typography>
        </Grid>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <Grid item md={4} sx={{ pb: 1, marginLeft: 'auto', marginRight: 'auto' }}>
            <Contiene />
          </Grid>
          <Grid item md={4} sx={{ pb: 1, marginLeft: 'auto', marginRight: 'auto' }}>
            <NoContiene />
          </Grid>
          <Grid item md={4} sx={{ pb: 1, marginLeft: 'auto', marginRight: 'auto' }}>
            <Igual />
          </Grid>
          <Grid item md={4} sx={{ pb: 1, marginLeft: 'auto', marginRight: 'auto' }}>
            <Distinto />
          </Grid>
          <Grid item md={4} sx={{ pb: 1, marginLeft: 'auto', marginRight: 'auto' }}>
            <Mayor />
          </Grid>
          <Grid item md={4} sx={{ pb: 1, marginLeft: 'auto', marginRight: 'auto' }}>
            <Menor />
          </Grid>
          <Grid item md={4} sx={{ pb: 1, marginLeft: 'auto', marginRight: 'auto' }}>
            <MayorIgual />
          </Grid>
          <Grid item md={4} sx={{ pb: 1, marginLeft: 'auto', marginRight: 'auto' }}>
            <MenorIgual />
          </Grid>
          <Grid item md={4} sx={{ pb: 1, marginLeft: 'auto', marginRight: 'auto' }}>
            <OperadorO />
          </Grid>
          <Grid item md={4} sx={{ pb: 1, marginLeft: 'auto', marginRight: 'auto' }}>
            <OperadorY />
          </Grid>
        </Box>
      </Stack>
    </Grid>
  );
}

export default SideBarOperadores;
