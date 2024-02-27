import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Avatar, CardHeader, Grid, Divider, Stack } from '@mui/material';
//Style
import { useTheme } from '@mui/material/styles';

//Nombres y cargo
export default function EjecutivoCard({ nombre, cantidadClientes, porcentajeMetasCumplidas, gestiones, cargo }) {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardActionArea>
        <CardHeader
          action={
            <Typography
              sx={{ backgroundColor: `${theme.palette.primary.main}`, color: 'white', padding: 0.5, borderRadius: 2, fontWeight: 600 }}
            >
              ExpertChoice
            </Typography>
          }
        />
        <Grid container direction="column" m={2} spacing={1}>
          <Grid item mb={3}>
            <Avatar sx={{ width: 100, height: 100 }} />
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontSize: '22px',
                fontWeight: 750,
                color: `${theme.palette.grey[500]}`
              }}
            >
              {nombre}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontWeight: 550,
                color: `${theme.palette.grey[500]}`
              }}
            >
              ExpertChoice
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontSize: '13px',
                fontWeight: 500,
                color: `${theme.palette.grey[500]}`
              }}
            >
              {cargo}
            </Typography>
          </Grid>
        </Grid>
        <Divider></Divider>
        {/**Primer Avatar */}
        <Grid container sx={{ backgroundColor: `${theme.palette.grey[300]}` }}>
          <Grid item md={4} xs={12}>
            <CardContent>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Typography>Cliente:</Typography>
                <Typography>{cantidadClientes}</Typography>
              </Stack>
            </CardContent>
          </Grid>
          <Grid item md={4} xs={12}>
            <CardContent>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Typography>Meta</Typography>
                <Typography>Cumplida:</Typography>
                <Typography>{porcentajeMetasCumplidas}%</Typography>
              </Stack>
            </CardContent>
          </Grid>
          <Grid item md={4} xs={12}>
            <CardContent>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Typography>Gestiones:</Typography>
                <Typography>{gestiones}</Typography>
              </Stack>
            </CardContent>
          </Grid>
        </Grid>
        {/* <Divider orientation="vertical" flexItem /> */}
      </CardActionArea>
    </Card>
  );
}
