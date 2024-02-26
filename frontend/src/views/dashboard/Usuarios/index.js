// material-ui
import { Button } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { columns }  from './utils/utils';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useEffect, useState } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //

const Usuarios = () => {

  const array = [];
  const [rows, setRows] = useState(array);
  
  const fetchRows = async () => {
    const response = await fetch('/users').then((response) => response.json());
    
    setRows(response);
    
  };
  useEffect(() => {
    fetchRows();
  }, [])

  return (
    <MainCard title="Lista de Usuarios">
      <Button variant="contained" startIcon={<IconPlus />}>
        Nuevo usuario
      </Button>
      <DataGrid 
        sx={{ mt: 2 }}
        rows={rows} 
        columns={columns}
        getRowId={(row) => row.USU_ID}

      />
    </MainCard>
  )
};

export default Usuarios;
