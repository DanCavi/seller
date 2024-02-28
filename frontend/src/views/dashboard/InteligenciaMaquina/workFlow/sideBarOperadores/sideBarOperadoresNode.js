import React from 'react';
//import mui materials
import { Grid, Stack, Typography } from '@mui/material';
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
      <Grid item md={12} sx={{ width: '100%', pb: 2 }} textAlign="center">
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
      <Stack direction={{ xs: 'row', md: 'column' }} sx={{ width: '100%', textAlign: 'center', alignItems: 'center' }} spacing={2}>
        <Grid item md={4} xs={3} sx={{ width: '100%' }}>
          <Contiene />
        </Grid>
        <Grid item md={4} xs={3} sx={{ width: '100%' }}>
          <NoContiene />
        </Grid>
        <Grid item md={4} xs={3} sx={{ width: '100%' }}>
          <Igual />
        </Grid>
        <Grid item md={4} xs={3} sx={{ width: '100%' }}>
          <Distinto />
        </Grid>
        <Grid item md={4} xs={3} sx={{ width: '100%' }}>
          <Mayor />
        </Grid>
        <Grid item md={4} xs={3} sx={{ width: '100%' }}>
          <Menor />
        </Grid>
        <Grid item md={4} xs={3} sx={{ width: '100%' }}>
          <MayorIgual />
        </Grid>
        <Grid item md={4} xs={3} sx={{ width: '100%' }}>
          <MenorIgual />
        </Grid>
        <Grid item md={4} xs={3} sx={{ width: '100%' }}>
          <OperadorO />
        </Grid>
        <Grid item md={4} xs={3} sx={{ width: '100%' }}>
          <OperadorY />
        </Grid>
      </Stack>
    </Grid>
  );
}

export default SideBarOperadores;
