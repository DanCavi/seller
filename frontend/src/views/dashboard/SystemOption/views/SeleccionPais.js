import { Grid, InputLabel, Button } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { CountrySwitch } from './components';
import Input from 'ui-component/Input/Input';

const SeleccionPais = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <InputLabel>Nombre del país</InputLabel>
        <Input />{' '}
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Button variant="contained" sx={{ mt: 3 }} fullWidth startIcon={<IconPlus />}>
          Agregar pais
        </Button>
      </Grid>
      {/* Mapear nombre de paises en ese grid*/}
      <CountrySwitch name="Colombia" />
      <CountrySwitch name="Perú" />
      <CountrySwitch name="Venezuela" />
    </Grid>
  );
};

export default SeleccionPais;
