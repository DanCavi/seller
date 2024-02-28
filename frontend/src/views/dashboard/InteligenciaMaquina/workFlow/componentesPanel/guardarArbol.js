import React from 'react';
import { Grid, Button } from '@mui/material';
import { IconDeviceFloppy, IconArrowBackUp } from '@tabler/icons';
import { Panel } from 'reactflow';
//import input
import InputText from '../input/inputText';

function PanelGuardarArbol({ onSave, handleNombreArbol, nombreArbol, handleGuardarNombreArbolClick, nuevoArbol }) {
  return (
    <>
      <Panel position="top-left">
        <Grid container direction="row" spacing={1}>
          <Grid item md={12} sx={{ width: '100%' }}>
            <Button sx={{ width: '100%' }} variant="contained" onClick={onSave} startIcon={<IconDeviceFloppy />}>
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Panel>
      <Panel position="top-right">
        <Grid container direction={{ md: 'column', xs: 'column', sm: 'column' }} spacing={1} sx={{ width: '100%' }}>
          <Grid item md={6} sx={{ width: '100%' }}>
            <InputText value={nombreArbol} onChange={handleNombreArbol} placeHolder={'Nombre Árbol'} />
          </Grid>
          <Grid item md={6} sx={{ width: '100%' }}>
            <Button startIcon={<IconDeviceFloppy />} sx={{ width: '100%' }} variant="contained" onClick={handleGuardarNombreArbolClick}>
              Guardar nombre
            </Button>
          </Grid>
        </Grid>
      </Panel>
      <Panel position="top-center">
        <Grid container direction="row" sx={{ width: '100%' }}>
          <Grid item>
            <Button onClick={nuevoArbol} startIcon={<IconArrowBackUp />} sx={{ width: '100%' }} variant="contained">
              Limpiar
            </Button>
          </Grid>
        </Grid>
      </Panel>
    </>
  );
}

export default PanelGuardarArbol;
