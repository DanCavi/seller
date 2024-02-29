// material-ui
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const rows = [
  {
    id: 1,
    name: 'Integracion 1'
  },
  {
    id: 2,
    name: 'Integracion 2'
  },
  {
    id: 3,
    name: 'Integracion 3'
  }
];

const columns = [
  {
    field: 'name',
    headerName: 'Fuente',
    width: 700
  },
  {
    field: 'actions',
    headerName: 'Acciones'
  }
];
// ==============================|| SAMPLE PAGE ||============================== //

const IntegracionesInbound = () => (
  <MainCard title="Integraciones disponibles">
    <DataGrid autoHeight rows={rows} columns={columns} />
  </MainCard>
);

export default IntegracionesInbound;
