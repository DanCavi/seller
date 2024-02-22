// material-ui
import { Button } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { columns, rows }  from './utils/utils';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Usuarios = () => {


  return (
    <MainCard title="Lista de Usuarios">
      <Button variant="contained" startIcon={<IconPlus />}>
        Nuevo usuario
      </Button>
      <DataGrid 
        sx={{ mt: 2 }}
        rows={rows} 
        columns={columns}
      />
    </MainCard>
  )
};

export default Usuarios;
