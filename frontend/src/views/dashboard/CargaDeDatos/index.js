// material-ui
import { Button, InputLabel, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { IconCloudUpload } from '@tabler/icons-react';
// project imports
import MainCard from 'ui-component/cards/MainCard';

import SelectStandar from 'ui-component/Select/Select';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const rows = [
  {
    id: 1,
    nombre: 'test',
    apellido: 'test',
    correo: 'test',
    telefono: 'test',
    Nacionalidad: 'test',
  }
]

const columns = [
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 200
  },
  {
    field: 'apellido',
    headerName: 'Apellido',
    width: 200
  },
  {
    field: 'correo',
    headerName: 'Correo',
    width: 200
  },
  {
    field: 'telefono',
    headerName: 'Telefono',
    width: 200
  },
  {
    field: 'Nacionalidad',
    headerName: 'Nacionalidad',
    width: 200
  }
]

// ==============================|| SAMPLE PAGE ||============================== //

const CargaDeDatos = () => (
  <MainCard title="Modulo de Cargas">
    <InputLabel>Seleccione canal para subir datos</InputLabel>
    <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
    <InputLabel>Seleccione la data cargada</InputLabel>
    <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
    <Button
      fullWidth
      sx={{ mb: 2 }}
      component="label"
      variant="contained"
      tabIndex={-1}
      startIcon={<IconCloudUpload />}
    >
      Carga de datos
      <VisuallyHiddenInput type="file" />
    </Button>
    <DataGrid
      rows={rows}
      columns={columns}
      sx={{ mb: 2 }}
    />
    <Button
      variant='contained'
      fullWidth
      onClick={() => { alert('Carga de datos exitosa') }}>Cargar</Button>
  </MainCard>
);

export default CargaDeDatos