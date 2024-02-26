import React from 'react';

import { Grid, IconButton, Avatar, Card, CardContent, Typography } from '@mui/material';
import { IconCircleX } from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';

//Icons
import { IconSwitch3 } from '@tabler/icons-react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  const theme = useTheme();
  return (
    <Card
      onDragStart={(event) => onDragStart(event, 'if')}
      draggable
      sx={{
        minWidth: 110,
        minHeight: 110,
        padding: 0.5,
        margin: 0,
        paddingBottom: 0,
        border: `2px solid ${theme.palette.grey[500]}`,
        borderRadius: 4,
        cursor: 'grab'
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
              <IconButton>
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
            <IconSwitch3 size={20} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
