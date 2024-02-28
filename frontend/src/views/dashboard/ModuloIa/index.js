// material-ui
import { Button, Grid, InputLabel } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import Input from 'ui-component/Input/Input';

import { IconPlus } from '@tabler/icons-react';
import { DataGrid } from '@mui/x-data-grid';

// project imports

const columns = [
  {
    field: 'producto_solicitado',
    headerName: 'Producto solicitado',
    width: 250
  },
  {
    field: 'solicitante',
    headerName: 'Solicitante',
    flex: 1
  },
  {
    field: 'fecha',
    headerName: 'Fecha',
    flex: 1
  },
  {
    field: 'estado',
    headerName: 'Estado',
    flex: 1
  },
  {
    field: 'acciones',
    headerName: 'Acciones',
    flex: 1
  }
];

const rows = [
  {
    id: 1,
    producto_solicitado: 'producto 1'
  }
];

const ModuloIa = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <MainCard title="Configurar" sx={{ mb: 2 }}>
        <Grid container direction="column" spacing={2} alignItems={'center'} item xs={12}>
          <Grid item xs={6}>
            <InputLabel>Ingrese el token</InputLabel>
            <Input />{' '}
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained">Validar Token</Button>
          </Grid>
        </Grid>
      </MainCard>
      <MainCard title="Productos">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            Nombre del producto
          </Grid>
          <Grid item xs={3}>
            <Input />{' '}
          </Grid>
          <Grid item align={'center'} xs={3}>
            <Button variant="contained" startIcon={<IconPlus />}>
              Guardar
            </Button>
          </Grid>
          <DataGrid sx={{ mt: 2 }} rows={rows} columns={columns} />
        </Grid>
      </MainCard>
    </Grid>
  </Grid>
);

export default ModuloIa;
