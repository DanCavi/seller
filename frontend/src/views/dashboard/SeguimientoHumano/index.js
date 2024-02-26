// material-ui
import { DataGrid } from '@mui/x-data-grid';
import { columns } from './utils/utils';
import { useEffect, useState } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SeguimientoHumano = () => {

  const array = [];
  const [rows, setRows] = useState(array);
  
  const fetchRows = async () => {
    const response = await fetch('/prospectos').then((response) => response.json());
    setRows(response);
    
  };
  useEffect(() => {
    fetchRows();
  }, [])

  return (

    <MainCard title="Prospectos">
    <DataGrid
      rows={rows}
      columns={columns}
      getRowId={(row) => row.ID}
      />
    </MainCard>
  );
}

export default SeguimientoHumano