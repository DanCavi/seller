import { Button, Grid, Typography } from '@mui/material';
import { IconDeviceFloppy } from '@tabler/icons-react';
import SelectStandar from 'ui-component/Select/Select';
import Input from 'ui-component/Input/Input';

const Semaforo = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        Formato de tiempo
      </Grid>
      <Grid item xs={3}>
        <SelectStandar datos={['Segundos', 'Minutos', 'Horas', 'Dias', 'Semanas', 'Meses']} />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" fullWidth startIcon={<IconDeviceFloppy />}>
          Guardar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Typography>Luz Amarilla &lt;=</Typography>
      </Grid>
      <Grid item xs={3}>
        <Input />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" fullWidth startIcon={<IconDeviceFloppy />}>
          Guardar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Typography>Luz Roja &lt;=</Typography>
      </Grid>
      <Grid item xs={3}>
        <Input />{' '}
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" fullWidth startIcon={<IconDeviceFloppy />}>
          Guardar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Typography>IA &lt;=</Typography>
      </Grid>
      <Grid item xs={3}>
        <Input />{' '}
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
