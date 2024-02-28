import React from 'react';
import { Grid, Button } from '@mui/material';
//Import Icons
import { IconCirclePlus } from '@tabler/icons';
import { Panel } from 'reactflow';

function NuevoArbol({ onClick }) {
  return (
    <Panel position="top-left">
      <Grid container direction="row" spacing={1}>
        <Grid item md={12} sx={{ width: '100%' }}>
          <Button onClick={onClick} startIcon={<IconCirclePlus />} sx={{ width: '100%' }} variant="contained">
            Nuevo
          </Button>
        </Grid>
      </Grid>
    </Panel>
  );
}

export default NuevoArbol;
