import { DataGrid } from '@mui/x-data-grid';
import MainCard from 'ui-component/cards/MainCard';

const HistReglas = () => {
  return (
    <MainCard title="Listado historial reglas">
      <DataGrid autoHeight columns={[]} rows={[]} />
    </MainCard>
  );
};

export default HistReglas;
