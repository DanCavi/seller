import { Grid, InputLabel, Button } from '@mui/material';
import { CurrencySwitch } from './components';
import { IconPlus } from '@tabler/icons-react';
import SelectStandar from 'ui-component/Select/Select';
import Input from 'ui-component/Input/Input';

const SeleccionMoneda = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <InputLabel>Nombre de la moneda</InputLabel>
        <Input />{' '}
      </Grid>
      <Grid item xs={3}>
        <InputLabel>País</InputLabel>
        <SelectStandar datos={['hola']} value={'3'} onChange={() => {}} />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}>
        <Button variant="contained" sx={{ mt: 3 }} fullWidth startIcon={<IconPlus />}>
          Agregar Moneda
        </Button>
      </Grid>
      {/* Mapear nombre de currency en ese grid*/}
      <CurrencySwitch name="Peso" />
      <CurrencySwitch name="Yen" />
      <CurrencySwitch name="Dollar" />
    </Grid>
  );
};

export default SeleccionMoneda;
