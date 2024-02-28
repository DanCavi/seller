import React, { useState, useEffect } from 'react';
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
import { GridRowModes, DataGrid, GridActionsCellItem, GridRowEditStopReasons, gridClasses } from '@mui/x-data-grid';
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Grid, Typography, styled, alpha } from '@mui/material';
//Icons Tabler Icon
import { IconSeeding, IconSeedingOff, IconAlertTriangle } from '@tabler/icons';

//Theme
import { useTheme } from '@mui/material';
//Importar axios
import axios from 'axios';
//Import Confirm
import { useConfirm } from 'material-ui-confirm';
//Alerts
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
//No Rows View
import CustomNoRowsOverlay from 'ui-component/NoRows/noRows';
// import url from 'baseUrl';

const URIGETFLOWS = '/dashboard/inteligencia/get-all-flows';
const GETFLOWBYID = '/dashboard/inteligencia/flow/';
const URIPROCESARFLOW = '/dashboard/inteligencia/ejecutar-workflow/';
// const URIEDITBYID = 'http://localhost:3300/dashboard/inteligencia/edit-flow/<int:id>';
const URIDELETEBYID = '/dashboard/inteligencia/delete-flow/';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function FullFeaturedCrudGrid({ dataFlow, onClick }) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [openConectar, setOpenConectar] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  //ESTADOS ALERT
  const [openAlert, setOpenAlert] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [getData, setGetData] = useState(false);
  //////////////// CLOSE ALERT ///////////////////////////////////

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
    setAlertError(false);
    setGetData(false);
  };

  //Estados flujos by id
  // const [flowById, setFlowById] = useState([]);
  //Fin estados flujos by id
  //Estado para boton
  const [activado, setActivado] = useState({});
  /**Funcion para obtener datos de axios e inicializar */
  // useEffect(() => {
  //   axios
  //     .get(`${url.BASE_URL}${URIGETFLOWS}`)
  //     .then((response) => {
  //       const fullData = response.data;
  //       console.log('fullData :', fullData.data);
  //       const dataToShow = fullData.data.map((item) => ({
  //         id: item.flow.id,
  //         nombre: item.flow.titulo,
  //         creado: item.fecha_creacion,
  //         edicion: item.flow.fecha_creacion,
  //         estado: 'aprobado'
  //       }));
  //       console.log('DataToShow');
  //       setRows(dataToShow);
  //     })
  //     .catch((error) => {
  //       console.error({
  //         message: 'Error al extraer flows',
  //         status: 403,
  //         Error: error
  //       });
  //       setGetData(true);
  //     });
  // }, []);

  console.log('Rows Iniciales :', rows);
  //Fin funciones para obtener datos
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  // const handleEditClick = (id) => async () => {
  //   try {
  //     const response = await axios.get(`${url.BASE_URL}${GETFLOWBYID}${id}`);
  //     const responseData = await response.data;

  //     // Actualiza el estado flowById con los datos de la respuesta

  //     if (responseData != '' || responseData != null) {
  //       dataFlow(responseData);
  //     }

  //     // Almacena los datos en localStorage
  //     const keyForStorage = 'dataFlow';
  //     console.log('insercion localstorage :', responseData);
  //     const JsonData = JSON.stringify(responseData);
  //     localStorage.setItem(keyForStorage, JsonData);

  //     // Actualiza el estado rowModesModel
  //     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });

  //     // Desplázate al elemento deseado
  //     const positionOnFlow = document.getElementById('workflow');
  //     if (positionOnFlow) {
  //       positionOnFlow.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   } catch (error) {
  //     console.log('Error al extraer datos:', error);
  //   }
  //   onClick();
  // };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const confirm = useConfirm();
  const handleDeleteClick = (id) => () => {
    confirm({
      title: (
        <>
          <Grid>
            <IconAlertTriangle size={40} />
          </Grid>
          <Grid>
            <Typography sx={{ fontWeight: 700, fontSize: 40 }}>Confirmar Operación</Typography>
          </Grid>
        </>
      ),
      titleProps: {
        color: '#36a9e1',
        backgroundColor: '#D4E6F1',
        textAlign: ' center'
      },
      description: (
        <DialogContentText
          sx={{
            color: '#6a6c6f',
            fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
            fontSize: '20px',
            fontWeight: 700
          }}
        >
          Esta acción es permanente,¿Deseas continuar?
        </DialogContentText>
      ),
      contentProps: {
        sx: {
          textAlign: 'center',
          mt: 6,
          mb: 4
        }
      },
      confirmationText: 'Confirmo',
      cancellationText: 'Cancelar',
      confirmationButtonProps: { variant: 'contained', sx: { backgroundColor: '#36a9e1', fontWeight: 600 } },
      cancellationButtonProps: { variant: 'contained', sx: { backgroundColor: '#36a9e1', fontWeight: 600 } }
    })
      .then(() => {
        axios
          .delete(`${url.BASE_URL}${URIDELETEBYID}${id}`)
          .then(() => {
            setOpenAlert(true);
          })
          .catch((error) => {
            console.log('error al eliminar el flujo :', error);
            setAlertError(true);
          });
      })
      .catch(() => {
        setAlertError(true);
      });
    setRows(rows.filter((row) => row.id !== id));
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
      minWidth: 150,
      flex: 5,
      editable: false
    },
    {
      field: 'edicion',
      headerName: 'Edicición',
      //type: 'date',
      width: 150,
      minWidth: 150,
      flex: 5,
      editable: false
    },
    {
      field: 'ultimaEdicion',
      headerName: 'Última Edición',
      type: 'date',
      width: 150,
      minWidth: 150,
      flex: 5,
      editable: false
    },
    {
      field: 'estado',
      headerName: 'Estado',
      width: 200,
      minWidth: 200,
      flex: 5,
      editable: false,
      renderCell: (params) => {
        const handleButtonClick = (id) => {
          setActivado((prevActivado) => {
            return {
              ...prevActivado,
              [id]: !prevActivado[id]
            };
          });
          console.log('Botón clickeado para el ID:', id);
          console.log('valor activado : ', activado);
          // if (!activado[id]) {
          //   axios
          //     .get(`${url.BASE_URL}${GETFLOWBYID}${id}`)
          //     .then((res) => {
          //       const dataFlow = res.data;
          //       const nodesData = res.data.nodos.map((nodo) => {
          //         const operacion = JSON.parse(nodo.data.operador);
          //         const keys = Object.keys(operacion);
          //         const operator = operacion[keys[0]];
          //         const option = nodo.data.opcion;
          //         const Value = nodo.data.inputValue;
          //         //const id_nodo = nodo.data.id;
          //         console.log('operator :', operator);

          //         return {
          //           id: nodo.id,
          //           position: nodo.position,
          //           positionAbsolute: nodo.positionAbsolute,
          //           selected: nodo.selected,
          //           type: nodo.type,
          //           width: nodo.width,
          //           data: { inputValue: Value, opcion: option, operador: operator }
          //         };
          //       });
          //       const nodes = nodesData;
          //       const dataToSend = { nodes: nodes, edges: dataFlow.edges };
          //       console.log('data to send en tabla para activar: ', dataToSend);
          //       // if (dataToSend) {
          //       //   axios
          //       //     .post(`${url.BASE_URL}${URIPROCESARFLOW}${url.USERID}`, dataToSend)
          //       //     .then((res) => {
          //       //       console.log({ message: res.data.message, status: res.data.status });
          //       //     })
          //       //     .catch((err) => {
          //       //       console.error({ message: 'Error al enviar los datos', status: 405, error: err });
          //       //     });
          //       // }

          //       console.log({ message: res.data.message, status: res.data });
          //     })
          //     .catch((err) => {
          //       console.error({ message: 'Error al extraer datos', error: err, status: 405 });
          //     });
          // }
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
  //=========================|| estilo de tabla ||===============================//
  const ODD_OPACITY = 0.2;

  const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
      backgroundColor: theme.palette.grey[200],
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&.Mui-selected': {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY + theme.palette.action.selectedOpacity),
        '&:hover, &.Mui-hovered': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY + theme.palette.action.selectedOpacity)
          }
        }
      }
    }
  }));
  //=========================|| Fin estilos tabla ||============================//

  return (
    <div style={{ height: 600, width: '100%' }}>
      <Box
        sx={{
          height: 'auto',
          width: '100%',
          '& .actions': {
            color: 'text.secondary'
          },
          '& .textPrimary': {
            color: 'text.primary'
          }
        }}
      >
        <StripedDataGrid
          rows={rows}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          scrollbarSize={20}
          getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
          slots={{ noRowsOverlay: CustomNoRowsOverlay }}
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
        <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            style={{ fontWeight: 600, color: 'white', backgroundColor: '#229954', borderRadius: 2 }}
          >
            Operación Exitosa
          </Alert>
        </Snackbar>
        <Snackbar open={alertError} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" style={{ fontWeight: 600, color: 'white', borderRadius: 2 }}>
            Error al realizar la operación
          </Alert>
        </Snackbar>
        <Snackbar open={getData} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" style={{ fontWeight: 600, color: 'white', borderRadius: 2 }}>
            Error al cargar la tabla
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
}
