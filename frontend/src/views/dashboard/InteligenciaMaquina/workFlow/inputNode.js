import React from 'react';
import { Grid, Card, CardContent, Typography, IconButton, Stack, Avatar } from '@mui/material';
import { Handle, Position } from 'reactflow';

//Style
import { useTheme } from '@mui/material/styles';
//Icon
import { IconCircleX } from '@tabler/icons-react';
import { IconPlayerPlay } from '@tabler/icons-react';

const CustomNodeInput = ({ isConnectable, id, data }) => {
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
      <Card
        sx={{
          minWidth: 190,
          padding: 0.5,
          margin: 0,
          border: `2px solid ${theme.palette.grey[200]}`,
          borderRadius: 2,
          borderLeft: `4px solid ${theme.palette.primary.main}`
        }}
      >
        <CardContent style={{ padding: 0, margin: 0, paddingBottom: 20 }}>
          <Grid container direction="column" spacing={1}>
            <Grid item sx={{ width: '100%' }}>
              <Stack direction="row">
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
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={1}>
                <Grid item md={3}>
                  <IconPlayerPlay />
                </Grid>
                <Grid item md={9} sx={{ width: '100%', pt: 0.5 }}>
                  <Typography>Input Node </Typography>
                </Grid>
              </Stack>
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
export default CustomNodeInput;
