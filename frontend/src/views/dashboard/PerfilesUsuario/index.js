// material-ui
import { Button, Paper } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

const columns = [
  {
    field: 'firstName',
    headerName: 'First name',
    width: 600,
    editable: false,
    sortable: false
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    editable: false,
    sortable: false,
    
    
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

// ==============================|| SAMPLE PAGE ||============================== //

const PerfilesUsuario = () => (
  <MainCard title="Perfiles">
    <Paper sx={{ p: 3 }}>
      <SubCard title="Perfiles en el sistema">
        <Button variant='contained' startIcon={<IconPlus/>} sx={{ mb: 2 }}>
          Nuevo perfil
        </Button>
        <DataGrid
          disableColumnMenu
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}>

        </DataGrid>
      </SubCard>
    </Paper>
  </MainCard>
);

export default PerfilesUsuario