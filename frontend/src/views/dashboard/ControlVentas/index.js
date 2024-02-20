// material-ui
import { Button, Grid, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { IconFileDownload } from '@tabler/icons-react';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const column = [
  {
    field: 'ejecutivo',
    headerName: 'Ejecutivo',    
  },
  {
    field: 'comision',
    headerName: 'Comisión',
  },
  {
    field: 'nombre_cliente',
    headerName: 'Nombre Cliente',
  },
  {
    field: 'rut_cliente',
    headerName: 'Rut Cliente',
  },
  {
    field: 'nombre_contacto',
    headerName: 'Nombre Contacto',
  },
  {
    field: 'fecha_cierre',
    headerName: 'Fecha Cierre',
  },
  {
    field: 'producto',
    headerName: 'Producto',
  },
  {
    field: 'estado_negocio',
    headerName: 'Estado Negocio',
  }
]

const row = [
  {
    id: 1,
    ejecutivo: 'test',
    comision: 'test',
    nombre_cliente: 'test',
    rut_cliente: 'test',
    nombre_contacto: 'test',
    fecha_cierre: 'test',
    producto: 'test',
    estado_negocio: 'test',
  },
  {
    id: 2,
    ejecutivo: 'test2',
    comision: 'test2',
    nombre_cliente: 'test2',
    rut_cliente: 'test2',
    nombre_contacto: 'test2',
    fecha_cierre: 'test2',
    producto: 'test2',
    estado_negocio: 'test2',
  }
]



// ==============================|| SAMPLE PAGE ||============================== //

const ControlVentas = () => (
  <MainCard title="Cierre">
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Button
          onClick={() => {alert('Descargando')}}
          variant="contained"
          startIcon={<IconFileDownload />}
          sx={{ mb: 2 }}>
          Descargar
        </Button>
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Buscar"
          sx={{ mb: 2 }}
        />
      </Grid>
    </Grid>
    <DataGrid
      columns={column}
      rows={row}
      disableColumnFilter
      disableColumnMenu
      disableColumnSelector
      disableDensitySelector/>
  </MainCard>
);

export default ControlVentas