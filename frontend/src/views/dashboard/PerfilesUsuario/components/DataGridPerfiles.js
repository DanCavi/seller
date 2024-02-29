import { DataGrid, GridRowEditStopReasons, GridToolbarContainer, useGridApiContext } from '@mui/x-data-grid';
import { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import { IconDeviceFloppy, IconEdit, IconList, IconTrash, IconX } from '@tabler/icons-react';
import ConfirmDialog from 'ui-component/Confirm/ConfirmDialog';

const response = await axios.get('/api/v1/profiles');
const initialRows = response.data;

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
  const apiRef = useGridApiContext();

  const handleClick = () => {
    apiRef.current.setPage(0);
    const id = Math.floor(Math.random() * 10000);
    setRows((oldRows) => [...oldRows, { PER_ID: id, PER_NOMBRE: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'PER_NOMBRE' }
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
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (PER_ID) => () => {
    setRowModesModel({ ...rowModesModel, [PER_ID]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (PER_ID) => () => {
    setRowModesModel({ ...rowModesModel, [PER_ID]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (PER_ID) => () => {
    setIsOpen(true)
    
    // setRows(rows.filter((row) => row.PER_ID !== PER_ID));
  };

  const handleConfirmClick = (PER_ID) => () => {
    setRows(rows.filter((row) => row.PER_ID !== PER_ID));
  }

  const handleCancelClick = (PER_ID) => () => {
    setRowModesModel({
      ...rowModesModel,
      [PER_ID]: { mode: GridRowModes.View, ignoreModifications: true }
    });

    const editedRow = rows.find((row) => row.PER_ID === PER_ID);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.PER_ID !== PER_ID));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.PER_ID === newRow.PER_ID ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: 'PER_NOMBRE',
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
            <GridActionsCellItem icon={<IconDeviceFloppy />} label="Guardar" onClick={handleSaveClick(id)} />,
            <GridActionsCellItem icon={<IconX />} label="Cancelar" onClick={handleCancelClick(id)} />
          ];
        }

        return [
          <GridActionsCellItem icon={<IconList />} label="Menú" />,
          <GridActionsCellItem icon={<IconEdit />} label="Editar" onClick={handleEditClick(id)} />,
          <GridActionsCellItem icon={<IconTrash />} label="Eliminar" onClick={handleDeleteClick(id)} />
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
        getRowId={(row) => row.PER_ID}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5 }
          },
          sorting: {
            sortModel: [{ field: 'PER_NOMBRE', sort: 'asc' }]
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
