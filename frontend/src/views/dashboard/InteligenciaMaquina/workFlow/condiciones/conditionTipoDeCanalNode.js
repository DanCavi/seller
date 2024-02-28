import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, IconButton, Avatar, Button } from '@mui/material';
import { Handle, Position } from 'reactflow';

//Style
import { useTheme } from '@mui/material/styles';
//Icon
import { IconCircleX, IconAntenna } from '@tabler/icons';
//IMPORT ESTILOS DE BOTONES
import { styleContiene, styleNoContiene, styleIgual, styleDistinto } from '../estilosArtefactos';

const ConditionTipoDeCanal = ({ isConnectable, id, data }) => {
  //Definir theme para colores
  const theme = useTheme();

  //FUNCION DELETENODE
  const onDeleteNode = data?.onDeleteNode; // Obtener onDeleteNode de los datos

  const handleNodeDelete = () => {
    if (onDeleteNode) {
      onDeleteNode(id);
    }
  };
  //FIN FUNCION DELETENODE

  //Definir condiciones para mostrar la condicion
  // const [inputType, setInputType] = useState('');
  // const [inputNodeContent, setInputNodeContent] = useState(null);

  const [buttonType, setButtonType] = useState();
  const [nodeContent, setNodeContent] = useState(); //estado contenido nodo

  //Funcion para guardar id y type en localStorage
  useEffect(() => {
    if (buttonType) {
      localStorage.setItem(`buttonType_${id}`, buttonType);
    }
  }, [buttonType, id]);

  //FUNCION PARA GUARDAR EN SOTORAGE BOTON MAs id
  useEffect(() => {
    const savedButtonType = localStorage.getItem(`buttonType_${id}`);
    if (savedButtonType) {
      setButtonType(savedButtonType);
      updateNodeContent(savedButtonType);
    }
  }, [id]);

  const onDrop = (event) => {
    const droppedButtonType = event.dataTransfer.getData('text/plain');
    setButtonType(droppedButtonType);
    updateNodeContent(droppedButtonType);

    //guardar el tipo de boton con el id del nodo
    const buttonTypeKey = `buttonType_${id}`;
    const buttonTypeData = JSON.stringify({ id, type: droppedButtonType });
    localStorage.setItem(buttonTypeKey, buttonTypeData);

    //const buttonType = event.dataTransfer.getData('text/plain');
    // Si es un botón, puedes crear un botón dentro del nodo aquí.
    console.log('tipo de boton: ', setButtonType);
    <Button sx={{ cursor: 'grab', width: '100%' }}>boton3 3</Button>;

    //Prueba codigo para almacenar un input

    //Fin prueba codigo almacena input
  };

  const updateNodeContent = (type) => {
    if (type.accion === 'contiene' || type === 'contiene') {
      console.log('comprobar funcion de type.accion', type.accion === 'contiene');
      // Crea y coloca el botón dentro del nodo.
      setNodeContent(
        <Button variant="text" size="small" disabled style={styleContiene}>
          contiene
        </Button>
      );
    } else if (type.accion === 'noContiene' || type === 'noContiene') {
      // Crea y coloca el botón dentro del nodo.
      setNodeContent(
        <Button variant="text" size="small" disableTouchRipple disableRipple disabled style={styleNoContiene}>
          No contiene
        </Button>
      );
    } else if (type.accion === 'igual' || type === 'igual') {
      setNodeContent(
        <Button variant="text" size="small" disabled style={styleIgual}>
          =
        </Button>
      );
    } else if (type.accion === 'distinto' || type === 'distinto') {
      setNodeContent(
        <Button variant="text" size="small" disabled style={styleDistinto}>
          !=
        </Button>
      );
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        //style={{ background: '#555555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />

      <Card
        onDrop={onDrop}
        onDragOver={onDragOver}
        sx={{
          minWidth: 190,
          padding: 0.5,
          margin: 0,
          paddingBottom: 0,
          border: `2px solid ${theme.palette.grey[200]}`,
          borderRadius: 2,
          borderLeft: '4px solid #FFA500'
        }}
      >
        <CardContent sx={{ padding: 0, margin: 0 }}>
          <Grid container direction="row" justify="center" alignItems="center" pb={1}>
            <Grid item sx={{ width: '100%' }}>
              <Avatar
                sx={{
                  backgroundColor: 'white',
                  color: `${theme.palette.grey[300]}`,
                  border: `2px solid ${theme.palette.grey[400]}`,
                  width: 16,
                  height: 16,
                  marginLeft: 'auto'
                }}
              >
                <IconButton onClick={handleNodeDelete}>
                  <IconCircleX />
                </IconButton>
              </Avatar>
            </Grid>
            <Grid item md={3}>
              <IconAntenna />
            </Grid>
            <Grid item md={8} sx={{ width: '100%', pt: 0.6 }}>
              <Typography>Tipo de Canal</Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item sx={{ width: '90%' }}>
              {nodeContent}
            </Grid>
          </Grid>
          <Grid container direction="row" p={1}>
            <Grid item>
              <input />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Handle
        type="source"
        position={Position.Right}
        id="a"
        //style={{ background: '#555555' }}
        isConnectable={isConnectable}
      />
    </>
  );
};
export default ConditionTipoDeCanal;
