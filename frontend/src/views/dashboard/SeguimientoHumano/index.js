// material-ui
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './utils/utils';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SeguimientoHumano = () => (
  <MainCard title="Prospectos">
    <DataGrid
      rows={rows}
      columns={columns}
    />
  </MainCard>
);

export default SeguimientoHumano