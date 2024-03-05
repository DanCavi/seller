// material-ui
import { DataGrid, GridActionsCellItem, GridRowEditStopReasons, GridToolbarContainer } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import url from 'baseUrl';
import ConfirmDialog from 'ui-component/Confirm/ConfirmDialog';
import { Button } from '@mui/material';
import { IconEdit, IconLockOff, IconPlus, IconLock, IconRotate2 } from '@tabler/icons-react';
import DialogUsuario from './components/DialogUsuario';
import DialogEditUsuario from './components/DialogEditUsuario';

const urlModulo = '/usuarios';
const URIGETALL = `${url.BASE_URL}${urlModulo}`;
const URIEDITUSER = `${url.BASE_URL}${urlModulo}/`;

// ==============================|| SAMPLE PAGE ||============================== //

function EditToolbar({ setRows }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <GridToolbarContainer>
      <Button variant="contained" startIcon={<IconPlus />} onClick={handleClick} size="small">
        Agregar usuario
      </Button>
      <DialogUsuario open={open} setOpen={setOpen} setRows={setRows} />
    </GridToolbarContainer>
  );
}

const Usuarios = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState({action: ''});

  // TRAIGO LAS FILAS DEL DATAGRID

  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get(URIGETALL)
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // COLUMNAS DEL DATAGRID

  function getFullRut(params) {
    if (params.row.digito_verificador != null && params.row.rut != null && params.row.rut > 0) {
      return params.row.rut + '-' + (params.row.digito_verificador == 0 ? 'K' : params.row.digito_verificador);
    }
  }

  const columns = [
    {
      field: 'usuario',
      headerName: 'Usuario',
      flex: 1,
      editable: false
    },
    {
      field: 'nombre',
      headerName: 'Nombre',
      flex: 1,
      editable: false
    },
    {
      field: 'apellido',
      headerName: 'Apellido',
      flex: 1,
      editable: false
    },
    {
      field: 'dni',
      headerName: 'DNI',
      flex: 1,
      editable: false,
      valueGetter: getFullRut
    },
    {
      field: 'perfil',
      headerName: 'Perfil',
      flex: 1,
      editable: false,
      valueGetter: (params) => {
        try {
          params.row.perfil.nombre;
          return params.row.perfil.nombre;
        } catch (error) {
          return 'Sin Perfil';
        }
      }
    },
    {
      field: 'estado',
      headerName: 'Estado',
      flex: 1,
      editable: false
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      flex: 1,
      getActions: ({ id }) => {
        const isBlocked = rows.find((row) => row.usuario_id === id)?.estado === 'Bloqueado';
        function handleEditClick () {
          setSelectedRow(rows.find((row) => row.usuario_id === id));
          setEditOpen(true);
        }

        function handleBlockClick () {
          setSelectedRow(rows.find((row) => row.usuario_id === id));
          setIsOpen(true);
        }

        return [
          <GridActionsCellItem key={`edit-${id}`} icon={<IconEdit />} label="Editar" onClick={handleEditClick} />,
          <GridActionsCellItem key={`refresh-${id}`} icon={<IconRotate2 />} label="Reestablecer contraseña" />,
          isBlocked ? (
            <GridActionsCellItem key={`unblock-${id}`} icon={<IconLockOff />} label="Desbloquear" />
          ) : (
            <GridActionsCellItem key={`block-${id}`} icon={<IconLock />} label="Bloquear" onClick={handleBlockClick} />
          )
        ];
      }
    }
  ];

  const [rowModesModel, setRowModesModel] = useState({});

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.usuario_id === newRow.usuario_id ? updatedRow : row)));
    return updatedRow;
  };

  useEffect(() => {
    if (isConfirmed.action === 'block') {
      axios
        .patch(URIEDITUSER + selectedRow.usuario_id, isConfirmed)
        .then((response) => {
          console.log(isConfirmed)
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [isConfirmed]);


  return (
    <MainCard title="Lista de Usuarios">
      <DataGrid
        autoHeight
        disableColumnMenu
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        sx={{ mt: 2 }}
        rows={rows}
        columns={columns}
        getRowId={(row) => row.usuario_id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10
            },
            sorting: {
              sortModel: [
                {
                  field: 'usuario',
                  sort: 'asc'
                }
              ]
            }
          }
        }}
        pageSizeOptions={[5, 10, 20]}
        slots={{
          toolbar: EditToolbar
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel }
        }}
      />
      <ConfirmDialog
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)} 
        titulo={'Bloquear usuario'}
        contenido={'Está seguro que desea bloquear este usuario?'}
        setIsConfirmed={setIsConfirmed}
        action={'block'}
        isConfirmed={isConfirmed}
      />
      <DialogEditUsuario
        editOpen={editOpen}
        setEditOpen={setEditOpen} 
        rowData={selectedRow} 
        processRowUpdate={processRowUpdate}
      />
    </MainCard>
  );
};

export default Usuarios;
