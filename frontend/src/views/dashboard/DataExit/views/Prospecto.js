import { Grid, InputLabel, Button } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { ButtonList } from './components';
import { IconCopy } from '@tabler/icons-react';
import SelectStandar from 'ui-component/Select/Select';
import Input from 'ui-component/Input/Input';

const Prospecto = () => {
  return (
    <MainCard title="Prospecto">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputLabel>Seleccione el modulo</InputLabel>
          <SelectStandar datos={['hola']} value={'3'} onChange={() => {}} />
        </Grid>
        <Grid item xs={12}>
          <ButtonList />
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Seleccione tabla</InputLabel>
          <SelectStandar datos={['hola']} value={'3'} onChange={() => {}} />
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Seleccione campo</InputLabel>
          <SelectStandar datos={['hola']} value={'3'} onChange={() => {}} />
        </Grid>
        <Grid item xs={2}>
          <Input />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" startIcon={<IconCopy />}>
            Copiar Shortcode
          </Button>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Prospecto;
