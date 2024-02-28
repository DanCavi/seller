import React from 'react';

import { Grid, Stack, IconButton, Avatar, Card, CardContent, Typography } from '@mui/material';
import { IconCircleX } from '@tabler/icons';
import { useTheme } from '@mui/material/styles';
//Icons
import { IconDeviceMobile } from '@tabler/icons';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  const theme = useTheme();
  return (
    <Card
      onDragStart={(event) => onDragStart(event, 'telefonico')}
      draggable
      sx={{
        minWidth: 160,
        padding: 0.5,
        margin: 0,
        border: `2px solid ${theme.palette.grey[200]}`,
        borderRadius: 2,
        borderRight: `4px solid ${theme.palette.primary.main}`,
        cursor: 'grab'
      }}
    >
      <CardContent sx={{ padding: 0, margin: 0 }}>
        <Grid container direction="column">
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
                <IconButton>
                  <IconCircleX />
                </IconButton>
              </Avatar>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2}>
              <Grid item md={2}>
                <IconDeviceMobile />
              </Grid>
              <Grid item md={10} sx={{ width: '100%', pt: 0.5 }}>
                <Typography>Telefonico</Typography>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
