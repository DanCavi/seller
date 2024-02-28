import React from 'react';
import { Grid, Button } from '@mui/material';
//Icons
import { IconDeviceFloppy, IconRecycle, IconArrowBackUp } from '@tabler/icons';
//Panels
import { Panel } from 'reactflow';
//import input
import InputText from '../input/inputText';

function PanelDeEdicion({ onClick, nombreArbol, onChange, onRestore, onEdit, nuevoArbol }) {
  return (
    <>
      <Panel position="top-left">
        <Grid container direction="row" spacing={1}>
          <Grid item md={8} sx={{ width: '100%' }}>
            <Button sx={{ width: '100%' }} variant="contained" onClick={onEdit} startIcon={<IconDeviceFloppy />}>
              Guardar Cambios
            </Button>
          </Grid>
          <Grid item md={8} sx={{ width: '100%' }}>
            <Button startIcon={<IconRecycle />} sx={{ width: '100%' }} variant="contained" onClick={onRestore}>
              Restore Flow
            </Button>
          </Grid>
        </Grid>
      </Panel>
      <Panel position="top-right">
        <Grid container direction="row" spacing={1}>
          <Grid item md={6} sx={{ width: '100%' }}>
            <InputText value={nombreArbol} onChange={onChange} placeHolder={''} />
          </Grid>
          <Grid item md={6} sx={{ width: '100%' }}>
            <Button startIcon={<IconDeviceFloppy />} sx={{ width: '100%' }} variant="contained" onClick={onClick}>
              Guardar nombre
            </Button>
          </Grid>
        </Grid>
      </Panel>
      <Panel position="top-center">
        <Grid container direction="row">
          <Grid item>
            <Button onClick={nuevoArbol} startIcon={<IconArrowBackUp />} sx={{ width: '100%' }} variant="contained">
              Volver
            </Button>
          </Grid>
        </Grid>
      </Panel>
    </>
  );
}

export default PanelDeEdicion;
