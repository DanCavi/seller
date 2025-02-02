import React from 'react';
import { Grid, Card, CardContent, Typography, IconButton, Avatar } from '@mui/material';
import { Handle, Position } from 'reactflow';

//Style
import { useTheme } from '@mui/material/styles';
//Icon
import { IconCircleX, IconSwitch3 } from '@tabler/icons';

const ConditionIf = ({ isConnectable, id, data }) => {
  //Definir theme para colores

  //Funcion Delete
  const onDeleteNode = data?.onDeleteNode; // Obtener onDeleteNode de los datos

  const handleNodeDelete = () => {
    if (onDeleteNode) {
      onDeleteNode(id);
    }
  };
  // FIN FUNCION DELETE NODE
  const theme = useTheme();
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
          minWidth: 110,
          minHeight: 110,
          padding: 0.5,
          margin: 0,
          paddingBottom: 0,
          border: `2px solid ${theme.palette.grey[500]}`,
          borderRadius: 4
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
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item sx={{ width: '90%' }}>
              <Typography sx={{ color: '#566573', fontSize: 20, fontWeight: 600 }} textAlign="center">
                IF
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Grid item alignItems="center">
              <IconSwitch3 size={18} />
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
export default ConditionIf;
