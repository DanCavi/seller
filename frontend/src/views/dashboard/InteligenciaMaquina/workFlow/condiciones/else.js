import React from 'react';
import { Grid, Card, CardContent, Typography, IconButton, Avatar } from '@mui/material';
import { Handle, Position } from 'reactflow';

//Style
import { useTheme } from '@mui/material/styles';
//Icon
import { IconCircleX } from '@tabler/icons-react';

//IMPORT ESTILOS BOTONES
const ConditionElse = ({ isConnectable, id, data }) => {
  //Definir theme para colores
  const theme = useTheme();

  //Funcion Delete
  const onDeleteNode = data?.onDeleteNode; // Obtener onDeleteNode de los datos

  const handleNodeDelete = () => {
    if (onDeleteNode) {
      onDeleteNode(id);
    }
  };
  // FIN FUNCION DELETE NODE

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
        sx={{
          minHeight: 110,
          minWidth: 110,
          padding: 0.5,
          margin: 0,
          paddingBottom: 0,
          border: `2px solid ${theme.palette.grey[500]}`,
          borderRadius: 4,
          backgroundColor: `${theme.palette.grey[50]}`
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
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center" pt={1}>
            <Grid item sx={{ width: '90%' }} alignItems="center">
              <Typography sx={{ color: '#566573', fontSize: 20, fontWeight: 600 }} textAlign="center">
                ELSE
              </Typography>
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
export default ConditionElse;
