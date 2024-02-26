import React, { useState } from 'react';
import { Button, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { Handle, Position } from 'reactflow';

//Style
import { useTheme } from '@mui/material/styles';
//Icon
import { IconCircleX, IconScript } from '@tabler/icons-react';

const Script = ({ isConnectable, id, data }) => {
  const theme = useTheme();
  console.log('id :', id);
  const onDeleteNode = data?.onDeleteNode;
  //console.log('onDeleteNode :', onDeleteNode);
  function handlerDeleteNode() {
    if (onDeleteNode) {
      onDeleteNode(id);
    }
  }

  const [nodeContent, setNodeContent] = useState(null); //estado contenido nodo

  const onDrop = (event) => {
    const buttonType = event.dataTransfer.getData('text/plain');
    // Si es un botón, puedes crear un botón dentro del nodo aquí.
    <Button sx={{ cursor: 'grab', width: '100%' }}>boton3 3</Button>;

    if (buttonType === 'accion1') {
      const newNodeContent = (
        <Button
          variant="text"
          size="small"
          disabled
          sx={{
            cursor: 'grab',
            width: '100%',
            borderRadius: 5,
            backgroundColor: `${theme.palette.error.main}`,
            borderColor: `${theme.palette.error.main}`,
            boxShadow: `0px 4px 4px ${theme.palette.grey[300]}`,
            color: 'white',
            fontWeight: 600
          }}
          style={{ transition: 'none', color: 'white' }}
        >
          Ejecutar
        </Button>
      );
      setNodeContent(newNodeContent);
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
          borderLeft: '4px solid #960019'
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
                <IconButton onClick={handlerDeleteNode} data-id={id}>
                  <IconCircleX />
                </IconButton>
              </Avatar>
            </Grid>
            <Grid item md={3} sx={{ pt: 0.7 }}>
              <IconScript />
            </Grid>
            <Grid item md={9} sx={{ width: '100%', pt: 0.7, pr: 3 }}>
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
export default Script;
