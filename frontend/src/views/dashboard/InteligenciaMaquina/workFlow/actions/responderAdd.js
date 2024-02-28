import React from 'react';

import { Grid, IconButton, Avatar, Card, CardContent, Typography } from '@mui/material';
import { IconCircleX } from '@tabler/icons';
import { useTheme } from '@mui/material/styles';
//Icons
import { IconSend } from '@tabler/icons';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  const theme = useTheme();
  return (
    <Card
      onDragStart={(event) => onDragStart(event, 'responder')}
      draggable
      sx={{
        cursor: 'grab',
        minWidth: 160,
        padding: 0.5,
        margin: 0,
        border: `2px solid ${theme.palette.grey[200]}`,
        borderRadius: 2,
        borderLeft: `4px solid ${theme.palette.warning.dark}`
      }}
    >
      <CardContent sx={{ padding: 0, margin: 0 }}>
        <Grid container direction="row">
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
              <IconButton>
                <IconCircleX />
              </IconButton>
            </Avatar>
          </Grid>
          <Grid item md={3}>
            <IconSend />
          </Grid>
          <Grid item md={9} sx={{ width: '100%', pt: 0.6 }}>
            <Typography>Responder</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
