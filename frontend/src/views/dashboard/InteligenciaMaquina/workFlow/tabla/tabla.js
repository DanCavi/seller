import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import Icons
// import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import PowerIcon from '@mui/icons-material/Power';
//Fin Icons
import { GridRowModes, DataGrid, GridActionsCellItem, GridRowEditStopReasons } from '@mui/x-data-grid';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useState } from 'react';
//Icons Tabler Icon
import { IconSeeding, IconSeedingOff } from '@tabler/icons-react';

//Theme
import { useTheme } from '@mui/material';
//Importar axios
import axios from 'axios';
import { useEffect } from 'react';

const URIGETFLOWS = 'http://localhost:3300/dashboard/inteligencia/get-all-flows';
const GETFLOWBYID = 'http://localhost:3300/dashboard/inteligencia/flow/';
// const URIEDITBYID = 'http://localhost:3300/dashboard/inteligencia/edit-flow/<int:id>';
const URIDELETEBYID = 'http://localhost:3300/dashboard/inteligencia/delete-flow/';

export default function FullFeaturedCrudGrid({ dataFlow, onClick }) {
  const [rows, setRows] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [openConectar, setOpenConectar] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  //Estados flujos by id
  // const [flowById, setFlowById] = useState([]);
  //Fin estados flujos by id
  //Estado para boton
  const [activado, setActivado] = useState({});
  /**Funcion para obtener datos de axios e inicializar */
  useEffect(() => {
    axios
      .get(URIGETFLOWS)
      .then((response) => {
        const fullData = response.data;
        console.log('fullData :', fullData);
        const dataToShow = fullData.map((item) => ({
          id: item.flow.id,
          nombre: item.flow.titulo,
          creado: item.flow.titulo,
          edicion: item.flow.fecha_creacion,
          estado: 'aprobado'
        }));
        console.log('DataToShow');
        setRows(dataToShow);
      })
      .catch((error) => {
        console.log('error al extraer datos', error);
      });
  }, []);

  console.log('Rows Iniciales :', rows);
  //Fin funciones para obtener datos
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => async () => {
    try {
      const response = await axios.get(`${GETFLOWBYID}${id}`);
      const responseData = await response.data;

      // Actualiza el estado flowById con los datos de la respuesta

      if (responseData != '' || responseData != null) {
        dataFlow(responseData);
      }

      // Almacena los datos en localStorage
      const keyForStorage = 'dataFlow';
      console.log('insercion localstorage :', responseData);
      const JsonData = JSON.stringify(responseData);
      localStorage.setItem(keyForStorage, JsonData);

      // Actualiza el estado rowModesModel
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });

      // Desplázate al elemento deseado
      const positionOnFlow = document.getElementById('workflow');
      if (positionOnFlow) {
        positionOnFlow.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.log('Error al extraer datos:', error);
    }
    onClick();
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    if (window.confirm('estas seguuro que quieres eliminar este flujo')) {
      axios
        .delete(`${URIDELETEBYID}${id}`)
        .then(() => {
          alert('WorkFlow Eliminado');
        })
        .catch((error) => {
          console.log('error al eliminar el flujo :', error);
        });
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true }
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  //Theme
  const theme = useTheme();
  //Fin Theme
  const columns = [
    { field: 'nombre', headerName: 'WorkFlow', width: 150, editable: false, flex: 5 },
    {
      field: 'creado',
      headerName: 'Creado',
      width: 150,
      editable: false,
      flex: 5
    },
    {
      field: 'edicion',
      headerName: 'Edicición',
      //type: 'date',
      width: 150,
      editable: false,
      flex: 5
    },
    {
      field: 'ultimaEdicion',
      headerName: 'Última Edición',
      type: 'date',
      width: 150,
      editable: false,
      flex: 5
    },
    {
      field: 'estado',
      headerName: 'Estado',
      width: 150,
      editable: false,
      flex: 5,
      renderCell: (params) => {
        const handleButtonClick = (id) => {
          setActivado((prevActivado) => {
            return {
              ...prevActivado,
              [id]: !prevActivado[id]
            };
          });
          console.log('Botón clickeado para el ID:', id);
        };

        const buttonLabel = activado[params.row.id] ? 'Desactivar Árbol' : 'Activar Árbol';
        const buttonColor = activado[params.row.id] ? '#FFB833' : '#62C23F';
        const buttonIcon = activado[params.row.id] ? <IconSeedingOff /> : <IconSeeding />;

        return (
          <Button
            startIcon={buttonIcon}
            sx={{
              width: '100%',
              borderRadius: 5,
              backgroundColor: `${buttonColor}`,
              borderColor: `${buttonColor}`,
              boxShadow: `0px 4px 4px ${theme.palette.grey[300]}`,
              color: 'white',
              fontWeight: 600,
              transition: 'all 0.3s ease', // Transición suave al cambiar los estilos
              '&:hover': {
                backgroundColor: 'white',
                color: `${buttonColor}`,
                border: `2px solid ${buttonColor}`,
                boxShadow: `0px -4px 4px ${theme.palette.grey[300]}`
              }
            }}
            variant="contained"
            //color={buttonColor}
            id={params.row.id}
            activado={activado[params.row.id]}
            onClick={() => handleButtonClick(params.row.id)}
          >
            {buttonLabel}
          </Button>
        );
      }
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      width: 150,
      flex: 7,
      cellClassName: 'actions',
      getActions: ({ id, nombre }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        const handleConectarClick = () => {
          setSelectedRow({ id, nombre });
          setOpenConectar(true);
        };

        const actions = [
          // Otras acciones existentes...

          <GridActionsCellItem
            key={`action-${id}`}
            icon={<PowerIcon />}
            label="Conectar"
            className="textPrimary"
            onClick={handleConectarClick}
            color="inherit"
          />
        ];

        if (isInEditMode) {
          actions.push(
            <GridActionsCellItem
              key={`action-${id}`}
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main'
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key={`action-${id}`}
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />
          );
        } else {
          actions.push(
            <GridActionsCellItem
              key={`action-${id}`}
              icon={<EditIcon />}
              label="Edit"
              className="textPrimary"
              onClick={handleEditClick(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              key={`action-${id}`}
              icon={<DeleteIcon />}
              label="Delete"
              onClick={handleDeleteClick(id)}
              color="inherit"
            />
          );
        }

        return actions;
      }
    }
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary'
        },
        '& .textPrimary': {
          color: 'text.primary'
        }
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slotProps={{
          toolbar: { setRows, setRowModesModel }
        }}
      />

      {/* Ventana emergente para "Conectar" */}
      <Dialog open={openConectar} onClose={() => setOpenConectar(false)}>
        <DialogTitle>{`Conectar a ${selectedRow ? selectedRow.nombre : ''}`}</DialogTitle>
        <DialogContent>
          {/* Aquí puedes agregar los campos para conectar */}

          {/* Fin de Agregar Campos */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConectar(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={() => setOpenConectar(false)} color="primary">
            Conectar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
