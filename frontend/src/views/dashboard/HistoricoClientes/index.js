// material-ui
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { IconEye } from '@tabler/icons-react';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const columns = [
  {
    field: 'rut',
    headerName: 'Rut',
    minWidth: 200
  },
  {
    field: 'razon_social',
    headerName: 'Razón Social',
    flex: 1
  },
  {
    field: 'fecha_creacion',
    headerName: 'Fecha Creación',
    flex: 1
  },
  {
    field: 'opcion',
    headerName: 'Opción',
    flex: 0.3
  }
];

const rows = [
  {
    id: 1,
    rut: 'test',
    razon_social: 'test',
    fecha_creacion: 'test',
    opcion: {
      icon: <IconEye />
    }
  },
  {
    id: 2,
    rut: 'test',
    razon_social: 'test',
    fecha_creacion: 'test',
    opcion: {
      icon: <IconEye />
    }
  }
];

// ==============================|| SAMPLE PAGE ||============================== //

const HistoricoClientes = () => (
  <MainCard title="">
    <Button variant="contained" sx={{ mb: 2 }}>
      Agregar nuevo cliente
    </Button>
    <DataGrid autoHeight columns={columns} rows={rows} />
  </MainCard>
);

export default HistoricoClientes;
