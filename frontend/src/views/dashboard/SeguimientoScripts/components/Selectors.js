import { Grid, InputLabel, Select, MenuItem } from '@mui/material';


const Selectors = () => (
  <Grid container spacing={2} sx={{ mb: 2 }}>
    <Grid item xs={2}>
      <InputLabel>Duración</InputLabel>
      <Select fullWidth>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test2</MenuItem>
        <MenuItem>Test3</MenuItem>
      </Select>
    </Grid>
    <Grid item xs={2}>
      <InputLabel>Canal</InputLabel>
      <Select fullWidth>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test2</MenuItem>
        <MenuItem>Test3</MenuItem>
      </Select>
    </Grid>
    <Grid item xs={2}>
      <InputLabel>Cola</InputLabel>
      <Select fullWidth>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test2</MenuItem>
        <MenuItem>Test3</MenuItem>
      </Select>
    </Grid>
    <Grid item xs={2}>
      <InputLabel>Agente</InputLabel>
      <Select fullWidth>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test2</MenuItem>
        <MenuItem>Test3</MenuItem>
      </Select>
    </Grid>
    <Grid item xs={2}>
      <InputLabel>Estado Conversación</InputLabel>
      <Select fullWidth>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test2</MenuItem>
        <MenuItem>Test3</MenuItem>
      </Select>
    </Grid>
    <Grid item xs={2}>
      <InputLabel>TimeZone</InputLabel>
      <Select fullWidth>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test2</MenuItem>
        <MenuItem>Test3</MenuItem>
      </Select>
    </Grid>
  </Grid>
);

export default Selectors;
