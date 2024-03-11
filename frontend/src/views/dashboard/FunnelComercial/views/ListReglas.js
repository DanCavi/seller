import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { IconEdit, IconPlugConnected } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { getData } from '../api';

const ListReglas = () => {
  const [rows, setRows] = useState([]);


  const handleEditClick = (id) => () => {
    console.log(`Editing row ${id}`);
  }

  const handleActivateClick = (id) => () => {
    console.log(`(De)Activating row ${id}`);
  }

  const columns = [
    {
      field: 'orden',
      headerName: 'Orden Tubo',
      flex: 0.5
    },
    {
      field: 'nombre',
      headerName: 'Nombre',
      flex: 1
    },
    {
      field: 'fecha_creacion',
      headerName: 'Creada',
      flex: 1
    },
    {
      field: 'requisito',
      headerName: 'Reglas',
      flex: 1
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      flex: 0.5,
      type: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem key={`edit-${id}`} icon={<IconEdit />} label="Editar" onClick={handleEditClick(id)} />,
          <GridActionsCellItem key={`activate-${id}`} icon={<IconPlugConnected />} label="Activar" onClick={handleActivateClick(id)} />
        ]
      }
    }
  ];

  useEffect(() => {
    getData()
      .then((data) => setRows(data))
      .catch((error) => console.error(error))
  }, []);

  return (
    <MainCard title="Listado de reglas">
      <DataGrid 
        autoHeight
        columns={columns}
        rows={rows}
        getRowId={(row) => row.funnel_comercial_id}  
      />
    </MainCard>
  );
};

export default ListReglas;
