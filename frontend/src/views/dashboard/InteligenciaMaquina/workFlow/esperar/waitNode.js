import React, { useState, useEffect } from 'react';
import { Button, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { Handle, Position } from 'reactflow';

//Style
import { useTheme } from '@mui/material/styles';
//Icon
import { IconCircleX, IconHourglassEmpty } from '@tabler/icons';

const Wait = ({ isConnectable, id, data }) => {
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

  //FUNCION PARA GUARDAR EN LOCAL STORAGE USANDO SET ITEM
  useEffect(() => {
    if (buttonType) {
      localStorage.setItem(`buttonType_${id}`, buttonType);
    }
  }, [buttonType, id]);

  //FUNCION PARA RECUPERAR DATOS DEL LOCALSTORAGE USANDO GET ITEM
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
  };

  const updateNodeContent = (type) => {
    if (type === 'input') {
      setNodeContent(<input style={{ width: '80%' }} />);
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
          borderLeft: '4px solid #6f32be'
        }}
      >
        <CardContent sx={{ padding: 0, margin: 0 }}>
          <Grid container direction="row" justify="center" alignItems="center">
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
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={3} sx={{ pt: 0.7 }}>
              <IconHourglassEmpty />
            </Grid>
            <Grid item md={9} sx={{ width: '100%', mt: 1 }}>
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
export default Wait;
