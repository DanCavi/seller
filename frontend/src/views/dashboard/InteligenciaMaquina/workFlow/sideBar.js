import React from 'react';

import { Divider, Grid, Stack, IconButton, Avatar, Card, CardContent, Typography } from '@mui/material';
import { IconCircleX } from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  const theme = useTheme();
  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'inputNode')} draggable>
        Input Node
      </div>

      <div onDragStart={(event) => onDragStart(event, 'customNode')} draggable style={{ cursor: 'grab' }}>
        <Grid sx={{ border: '1px solid', p: 0.5, backgroundColor: 'white', borderRadius: 1 }}>
          <Stack direction="row" justifyContent="flex-end" sx={{ mb: 1 }}>
            <Grid item alignItems="flex-end">
              <Avatar
                sx={{
                  backgroundColor: 'white',
                  color: `${theme.palette.grey[300]}`,
                  border: `2px solid ${theme.palette.grey[400]}`,
                  width: 16,
                  height: 16,
                  padding: '1px',
                  justifyItems: 'center'
                }}
              >
                <IconButton disabled>
                  <IconCircleX />
                </IconButton>
              </Avatar>
            </Grid>
          </Stack>
          <Card sx={{ minWidth: 140, padding: 1, margin: 0, border: `1px solid ${theme.palette.primary[200]}`, borderRadius: 1 }}>
            <CardContent sx={{ padding: 0, margin: 0 }}>
              <Grid container direction="column">
                <Grid item sx={{ width: '100%' }}>
                  <Typography>Nodo por defecto </Typography>
                </Grid>
                <Divider></Divider>
                <Grid item sx={{ width: '100%' }}>
                  <Typography>Nodo por Defecto </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
    </aside>
  );
};
