import { Grid, InputLabel } from '@mui/material';
import SelectStandar from 'ui-component/Select/Select';


const Selectors = () => (
  <Grid container spacing={2} sx={{ mb: 2 }}>
    <Grid item xs={2}>
      <InputLabel>Duración</InputLabel>
      <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
    </Grid>
    <Grid item xs={2}>
      <InputLabel>Canal</InputLabel>
      <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
    </Grid>
    <Grid item xs={2}>
      <InputLabel>Cola</InputLabel>
      <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
    </Grid>
    <Grid item xs={2}>
      <InputLabel>Agente</InputLabel>
      <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
    </Grid>
    <Grid item xs={2}>
      <InputLabel>Estado Conversación</InputLabel>
      <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
    </Grid>
    <Grid item xs={2}>
      <InputLabel>TimeZone</InputLabel>
      <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
    </Grid>
  </Grid>
);

export default Selectors;
