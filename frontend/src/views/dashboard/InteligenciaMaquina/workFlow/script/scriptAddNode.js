import React from 'react';

import { Grid, IconButton, Avatar, Card, CardContent, Typography } from '@mui/material';
import { IconCircleX } from '@tabler/icons';
import { useTheme } from '@mui/material/styles';
//Icons
import { IconScript } from '@tabler/icons';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  const theme = useTheme();
  return (
    <Card
      onDragStart={(event) => onDragStart(event, 'script')}
      draggable
      sx={{
        cursor: 'grab',
        minWidth: 160,
        padding: 0.5,
        margin: 0,
        border: `2px solid ${theme.palette.grey[200]}`,
        borderRadius: 2,
        borderLeft: '4px solid #960019'
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
            <IconScript />
          </Grid>
          <Grid item md={9} sx={{ width: '100%', pt: 0.6 }}>
            <Typography>Script</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
