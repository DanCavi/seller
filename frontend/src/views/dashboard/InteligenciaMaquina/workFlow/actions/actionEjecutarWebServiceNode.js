import React, { useState } from 'react';
import { Button, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { Handle, Position } from 'reactflow';

//Style
import { useTheme } from '@mui/material/styles';
//Icon
import { IconCircleX, IconNetwork } from '@tabler/icons';
import { useEffect } from 'react';

const EjecutarWebService = ({ isConnectable, id, data }) => {
  const theme = useTheme();

  //Funcion Delete
  const onDeleteNode = data?.onDeleteNode; // Obtener onDeleteNode de los datos

  const handleNodeDelete = () => {
    if (onDeleteNode) {
      onDeleteNode(id);
    }
  };
  // FIN FUNCION DELETE NODE

  const [nodeContent, setNodeContent] = useState(null); //estado contenido nodo
  const [buttonType, setButtonType] = useState('');

  useEffect(() => {
    if (buttonType) {
      localStorage.setItem(`buttonType_${id}`, buttonType);
    }
  }, [buttonType, id]);

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
  //   if (setButtonType === 'input') {
  //     const newNodeContent = <input />;
  //     setNodeContent(newNodeContent);
  //   }
  // };
  const updateNodeContent = (type) => {
    if (type === 'input') {
      setNodeContent(<input />);
      console.log('Contenido Boton: ', type); //llega el contenido del boton
    } else {
      setNodeContent(null);
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
        style={{ paddingBottom: 0 }}
        sx={{
          minWidth: 190,
          padding: 0.5,
          margin: 0,
          border: `2px solid ${theme.palette.grey[200]}`,
          borderRadius: 2,
          borderLeft: '4px solid #597e8d'
        }}
      >
        <CardContent sx={{ padding: 0, margin: 0 }}>
          <Grid container direction="row" justify="center" alignItems="center" pb={0.5}>
            <Grid item sx={{ width: '100%' }}>
              <Avatar
                sx={{
                  backgroundColor: 'white',
                  color: `${theme.palette.grey[300]}`,
                  border: `2px solid ${theme.palette.grey[400]}`,
                  width: 16,
                  height: 16,
                  justifyItems: 'center',
                  marginLeft: 'auto'
                }}
              >
                <IconButton onClick={handleNodeDelete}>
                  <IconCircleX />
                </IconButton>
              </Avatar>
            </Grid>
            <Grid item md={3} sx={{ pt: 0.7 }}>
              <IconNetwork />
            </Grid>
            <Grid item md={9} sx={{ width: '100%', pt: 0.7, pr: 3 }}>
              Web Service
            </Grid>
          </Grid>
          <Grid container direction="row" p={1}>
            <Grid item sx={{ width: '90%' }}>
              {nodeContent}
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
export default EjecutarWebService;
