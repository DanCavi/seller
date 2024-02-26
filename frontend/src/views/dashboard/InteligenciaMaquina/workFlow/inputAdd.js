import React from 'react';

import { Grid, Stack, IconButton, Avatar, Card, CardContent, Typography } from '@mui/material';
import { IconCircleX } from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';

//Icon
import { IconPlayerPlay } from '@tabler/icons-react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  const theme = useTheme();
  return (
    <Card
      sx={{
        minWidth: 160,
        padding: 0.5,
        margin: 0,
        paddingBottom: 2,
        border: `2px solid ${theme.palette.grey[200]}`,
        borderRadius: 2,
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        cursor: 'grab'
      }}
      onDragStart={(event) => onDragStart(event, 'inputNode')}
      draggable
    >
      <CardContent style={{ padding: 0, margin: 0, paddingBottom: 5 }}>
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
                <IconButton>
                  <IconCircleX />
                </IconButton>
              </Avatar>
            </Stack>
          </Grid>
          <Grid item justifyContent="center" justifyItems="center">
            <Stack direction="row" spacing={1}>
              <Grid item md={3}>
                <IconPlayerPlay />
              </Grid>
              <Grid item md={6} sx={{ width: '100%', pt: 0.5 }}>
                <Typography>Iniciar</Typography>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
