import { InputLabel, TextField, Button, Grid, Select, MenuItem } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import MainCard from 'ui-component/cards/MainCard';
import { CountrySwitch, CurrencySwitch, DateField } from './components';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './utils/utils.js';

// ==============================|| SAMPLE PAGE ||============================== //

const SystemOption = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <MainCard title="Selección País">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <InputLabel>Nombre del país</InputLabel>
            <TextField size="small" fullWidth />
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
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Selección Moneda">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <InputLabel>Nombre de la moneda</InputLabel>
            <TextField size="small" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <InputLabel>País</InputLabel>
            <Select fullWidth size="small">
              <MenuItem>Internacional</MenuItem>
              <MenuItem>Chile</MenuItem>
              <MenuItem>USA</MenuItem>
            </Select>
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
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Selección Dias Feriados">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <InputLabel>Fecha</InputLabel>
            <DateField />
          </Grid>
          <Grid item xs={3}>
            <InputLabel>Dia Feriado</InputLabel>
            <TextField size="small" fullWidth />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Button variant="contained" sx={{ mt: 3 }} fullWidth startIcon={<IconPlus />}>
              Agregar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <DataGrid  rows={rows} columns={columns} />
          </Grid>
        </Grid>
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Selección Horario Hábil"></MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Modulo IA"></MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Calculo"></MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Administrador de Script"></MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Data exit"></MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Semaforo"></MainCard>
    </Grid>
  </Grid>
);

export default SystemOption;
