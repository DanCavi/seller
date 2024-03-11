import { DataGrid, GridRowEditStopReasons, GridToolbarContainer, useGridApiContext } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { getData, postData, patchData, deleteData } from '../api';
import { Button } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import { IconDeviceFloppy, IconEdit, IconList, IconTrash, IconX } from '@tabler/icons-react';
import ConfirmDialog from 'ui-component/Confirm/ConfirmDialog';

function EditToolbar(props) {
  const { setRows, setRowModesModel, rows } = props;
  const apiRef = useGridApiContext();

  const handleClick = () => {
    apiRef.current.setPage(0);
    const maxId = Math.max(...rows.map((row) => row.perfil_id), 0);
    const id = maxId + 1;
    setRows((oldRows) => [...oldRows, { perfil_id: id, nombre: '', isNew: true}]);
    apiRef.current.sortColumn({ field: 'perfil_id', sortable: true }, 'desc');
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
  const [isConfirmed, setIsConfirmed] = useState();
  const [eliminarId, setEliminarId] = useState([]);

  useEffect(() => {
    getData()
      .then((data) => setRows(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (isConfirmed) {
      handleConfirmClick();
    }
  }, [isConfirmed]);

  const handleEditClick = (perfil_id) => () => {
    setRowModesModel({ ...rowModesModel, [perfil_id]: { mode: GridRowModes.Edit, fieldToFocus: 'nombre' } });
  };

  const handleSaveClick = (perfil_id) => () => {
    setRowModesModel({ ...rowModesModel, [perfil_id]: { mode: GridRowModes.View } });

  };

  const handleDeleteClick = (perfil_id) => () => {
    setIsOpen(true);
    setEliminarId(perfil_id);
  };

  const handleConfirmClick = () => {
    deleteData(`/${eliminarId}`)
      .then(() => {
        setRows(rows.filter((row) => row.perfil_id !== eliminarId));
        setEliminarId([]);
      })
      .catch((error) => console.log('Error: \n', error));
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
    newRow.isNew
      ? postData(newRow)
        .then((data) => console.log(data))
        .catch((error) => console.log('Error: \n', error))
      : patchData(`/${newRow.perfil_id}`, newRow)
        .then((data) => console.log(data))
        .catch((error) => console.log('Error: \n', error));
    const updatedRow = { ...newRow, isNew: false };
    const estasRows = rows.map((row) => (row.perfil_id === newRow.perfil_id ? updatedRow : row));
    setRows(estasRows)
    
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: 'perfil_id'
    },
    {
      field: 'nombre',
      headerName: 'Nombre',
      flex: 1,
      editable: true,
      // preProcessEditCellProps: (params) => {
      //   console.log(params.props)
      //   return { ...params.props, error: true };
      // }
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
        onRowEditStop={(params, event) => {
          if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
          }
        }}
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={(error) => console.log(error)}
        getRowId={(row) => row.perfil_id}
        rows={rows}
        columns={columns}
        initialState={{
          columns: {
            columnVisibilityModel: { perfil_id: false }
          },
          pagination: {
            paginationModel: { pageSize: 10 }
          },
          sorting: {
            sortModel: [{ field: 'perfil_id', sort: 'asc' }]
          }
        }}
        pageSizeOptions={[5, 10, 20]}
        slots={{
          toolbar: EditToolbar
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel, rows }
        }}
        sx={{ '& .MuiDataGrid-row--editing .MuiDataGrid-cell':  {
          backgroundColor: '#f3a3a347'
        } }}
        
      />
      <ConfirmDialog
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        action={'eliminar'}
        titulo={'Eliminar perfil'}
        contenido={'¿Desea eliminar el perfil?'}
        setIsConfirmed={setIsConfirmed}
      />
    </div>
  );
}

export default DataGridPerfiles;
