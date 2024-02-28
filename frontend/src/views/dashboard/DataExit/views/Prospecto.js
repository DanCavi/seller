import { Grid, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { ButtonList } from './components';
import { IconCopy } from '@tabler/icons-react';
import SelectStandar from 'ui-component/Select/Select';

const Prospecto = () => {
  return (
    <MainCard title="Prospecto">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputLabel>Seleccione el modulo</InputLabel>
          <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
        </Grid>
        <Grid item xs={12}>
          <ButtonList />
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Seleccione tabla</InputLabel>
          <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Seleccione campo</InputLabel>
          <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
        </Grid>
        <Grid item xs={2}>
          <TextField fullWidth sx={{ mt: 1.2 }} inputProps={{ readOnly: true }} />
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
