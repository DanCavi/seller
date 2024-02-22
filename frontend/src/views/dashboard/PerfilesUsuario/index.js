// material-ui
import { Button, Paper } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';


// utils
import { columns } from './utils/utils';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| SAMPLE PAGE ||============================== //

const PerfilesUsuario = () => {
  const array = [];
  const [data, setData] = useState(array);

  const fetchData = async () => {
    const response = await fetch('/perfiles-usuario').then((response) => response.json());

    setData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const rows = data;

  return (
    <MainCard title="Perfiles">
      <Paper sx={{ p: 3 }}>
        <SubCard title="Perfiles en el sistema">
          <Button variant="contained" startIcon={<IconPlus />} sx={{ mb: 2 }}>
            Nuevo perfil
          </Button>
          <DataGrid
            disableColumnMenu
            getRowId={(row) => row.PER_ID}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5 }
              }
            }}
            pageSizeOptions={[5, 10]}
          ></DataGrid>
        </SubCard>
      </Paper>
    </MainCard>
  );
};

export default PerfilesUsuario;
