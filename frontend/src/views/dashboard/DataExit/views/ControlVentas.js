import { Button, Grid } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridToolbarContainer } from '@mui/x-data-grid';
import { IconDeviceFloppy, IconPlus, IconTrash } from '@tabler/icons-react';
import MainCard from 'ui-component/cards/MainCard';
import { ButtonList } from './components';

function Toolbar({ setRows }) {
  console.log(setRows)
  return (
    <GridToolbarContainer>
      <Button 
        variant="contained"
        startIcon={<IconPlus />}
        sx={{ mb: 2, mr: 2 }}
        onClick={handleClick}
      >
        Agregar Data
      </Button>
      <Button
        variant="contained"
        startIcon={<IconDeviceFloppy />}
        sx={{ mb: 2 }}>
        Guardar
      </Button>
    </GridToolbarContainer>
  );
}

const ControlVentas = () => {
  const columns = [
    {
      field: 'etiqueta',
      headerName: 'Etiqueta',
      flex: 1
    },
    {
      field: 'valor',
      headerName: 'Valor',
      flex: 1
    },
    {
      field: 'actions',
      headerName: 'Eliminar',
      flex: 0.5,
      type: 'actions',
      getActions: ({ id }) => {
        return [<GridActionsCellItem key={`delete-${id}`} icon={<IconTrash />} label="Eliminar" />];
      }
    }
  ];

  return (
    <MainCard title="Control de Ventas">
      <Grid container spacing={2}>
        <ButtonList />
      </Grid>
      <Grid item xs={12} mt={2}>
        <DataGrid 
          autoHeight
          columns={columns}
          rows={[]}
          slots={{
            toolbar: Toolbar
          }}  
        />
      </Grid>
    </MainCard>
  );
};

export default ControlVentas;
