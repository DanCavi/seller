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
  }, []);

  return (
    <MainCard title="Prospectos">
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        getRowId={(row) => row.ID}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10, 20]}
      />
    </MainCard>
  );
};

export default SeguimientoHumano;
