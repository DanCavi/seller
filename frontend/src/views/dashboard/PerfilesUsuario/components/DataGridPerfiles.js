import { DataGrid, GridRowEditStopReasons, GridToolbarContainer, useGridApiContext } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import url from 'baseUrl';
import { Button } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import { IconDeviceFloppy, IconEdit, IconList, IconTrash, IconX } from '@tabler/icons-react';
import ConfirmDialog from 'ui-component/Confirm/ConfirmDialog';

const urlModulo = '/perfiles-usuario';
const URIGETALL = `${url.BASE_URL}${urlModulo}`;

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
  const apiRef = useGridApiContext();

  const handleClick = () => {
    apiRef.current.setPage(0);
    const id = Math.floor(Math.random() * 10000);
    setRows((oldRows) => [...oldRows, { perfil_id: id, nombre: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'nombre' }
    }));
  };

  return (
    <GridToolbarContainer>
      <Button variant="contained" startIcon={<IconPlus />} onClick={handleClick} size="small">
        Agregar perfil
      </Button>
    </GridToolbarContainer>
  );
}

function DataGridPerfiles() {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [isOpen, setIsOpen] = useState(false);

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

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (perfil_id) => () => {
    setRowModesModel({ ...rowModesModel, [perfil_id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (perfil_id) => () => {
    setRowModesModel({ ...rowModesModel, [perfil_id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (perfil_id) => () => {
    setIsOpen(true);

    setRows(rows.filter((row) => row.perfil_id !== perfil_id));
  };

  const handleConfirmClick = (perfil_id) => () => {
    setRows(rows.filter((row) => row.perfil_id !== perfil_id));
  };

  const handleCancelClick = (perfil_id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [perfil_id]: { mode: GridRowModes.View, ignoreModifications: true }
    });

    const editedRow = rows.find((row) => row.perfil_id === perfil_id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.perfil_id !== perfil_id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.perfil_id === newRow.perfil_id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: 'nombre',
      headerName: 'Nombre',
      flex: 1,
      editable: true,
      sortable: false
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      flex: 0.3,
      editable: false,
      sortable: false,
      type: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem key={`save-${id}`} icon={<IconDeviceFloppy />} label="Guardar" onClick={handleSaveClick(id)} />,
            <GridActionsCellItem key={`cancel-${id}`} icon={<IconX />} label="Cancelar" onClick={handleCancelClick(id)} />
          ];
        }

        return [
          <GridActionsCellItem key={`menu-${id}`} icon={<IconList />} label="Menú" />,
          <GridActionsCellItem key={`edit-${id}`} icon={<IconEdit />} label="Editar" onClick={handleEditClick(id)} />,
          <GridActionsCellItem key={`delete-${id}`} icon={<IconTrash />} label="Eliminar" onClick={handleDeleteClick(id)} />
        ];
      }
    }
  ];

  return (
    <div>
      <DataGrid
        autoHeight
        disableColumnMenu
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        getRowId={(row) => row.perfil_id}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5 }
          },
          sorting: {
            sortModel: [{ field: 'nombre', sort: 'asc' }]
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
      <ConfirmDialog isOpen={isOpen} handleClose={() => setIsOpen(false)} handleDeleteClick={handleConfirmClick} />
    </div>
  );
}

export default DataGridPerfiles;
