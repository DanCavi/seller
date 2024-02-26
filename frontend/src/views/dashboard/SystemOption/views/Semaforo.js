import { Button, Grid, Select, MenuItem, TextField, Typography } from '@mui/material';
import { IconDeviceFloppy } from '@tabler/icons-react';

const Semaforo = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        Formato de tiempo
      </Grid>
      <Grid item xs={3}>
        <Select size="small" fullWidth>
          <MenuItem>Segundos</MenuItem>
          <MenuItem>Minutos</MenuItem>
          <MenuItem>Horas</MenuItem>
          <MenuItem>Días</MenuItem>
          <MenuItem>Semanas</MenuItem>
          <MenuItem>Meses</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" fullWidth startIcon={<IconDeviceFloppy />}>
          Guardar
        </Button>
        </Grid>
        <Grid item xs={6}>
        <Typography>
          Luz Amarilla &lt;=
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField size="small" fullWidth />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" fullWidth startIcon={<IconDeviceFloppy />}>
          Guardar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          Luz Roja &lt;=
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField size="small" fullWidth />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" fullWidth startIcon={<IconDeviceFloppy />}>
          Guardar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          IA &lt;=
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField size="small" fullWidth />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" fullWidth startIcon={<IconDeviceFloppy />}>
          Guardar
        </Button>
      </Grid>
      
    </Grid>
  );
};

export default Semaforo;
