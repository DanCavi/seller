import { InputLabel, Button, Grid, FormControlLabel, Switch } from '@mui/material';
import { IconDeviceFloppy, IconPlus } from '@tabler/icons-react';
import MainCard from 'ui-component/cards/MainCard';
import InputFecha from 'ui-component/InputFecha/InputFecha';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './utils/utils.js';
import { SeleccionPais, SeleccionMoneda, DataExit, Semaforo } from './views';
import SelectStandar from 'ui-component/Select/Select';
import Input from 'ui-component/Input/Input';
import { HoraDesde, HoraHasta } from './components';
// ==============================|| SAMPLE PAGE ||============================== //

const SystemOption = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <MainCard title="Selección País">
        <SeleccionPais />
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Selección Moneda">
        <SeleccionMoneda />
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Selección Dias Feriados">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <InputLabel>Fecha</InputLabel>
            <InputFecha />
          </Grid>
          <Grid item xs={3}>
            <InputLabel>Dia Feriado</InputLabel>
            <Input />{' '}
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Button variant="contained" sx={{ mt: 3 }} fullWidth startIcon={<IconPlus />}>
              Agregar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <DataGrid autoHeight rows={rows} columns={columns} />
          </Grid>
        </Grid>
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Selección Horario Hábil">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <InputLabel>Día de la Semana</InputLabel>
            <SelectStandar datos={['hola']} value={'3'} onChange={() => {}} />
          </Grid>
          <Grid item xs={3}>
            <HoraDesde />
          </Grid>
          <Grid item xs={3}>
            <HoraHasta />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" size="small" sx={{ mt: 2.3 }} fullWidth startIcon={<IconPlus />}>
              Agregar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <DataGrid autoHeight rows={rows} columns={columns} />
          </Grid>
        </Grid>
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Modulo IA">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            Rango de conversación
          </Grid>
          <Grid item xs={3}>
            <Input />{' '}
          </Grid>
          <Grid item xs={3}>
            <SelectStandar datos={['hola']} value={'3'} onChange={() => {}} />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" fullWidth startIcon={<IconDeviceFloppy />}>
              Guardar
            </Button>
          </Grid>
          <Grid item xs={3}>
            Limite de frases por conversación
          </Grid>
          <Grid item xs={3}>
            <Input />{' '}
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Button variant="contained" fullWidth startIcon={<IconDeviceFloppy />}>
              Guardar
            </Button>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
            Learning Administrador de Script
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel control={<Switch />} label="Activar" labelPlacement="end" />
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
            Respuesta automatica IA
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel control={<Switch />} label="Activar" labelPlacement="end" />
          </Grid>
        </Grid>
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Calculo">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            Propensión de cierre
          </Grid>
          <Grid item xs={4}>
            <SelectStandar datos={['hola']} value={'3'} onChange={() => {}} />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" fullWidth startIcon={<IconDeviceFloppy />}>
              Guardar
            </Button>
          </Grid>
          <Grid item xs={4}>
            Prioridad
          </Grid>
          <Grid item xs={4}>
            <SelectStandar datos={['hola']} value={'3'} onChange={() => {}} />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" fullWidth startIcon={<IconDeviceFloppy />}>
              Guardar
            </Button>
          </Grid>
        </Grid>
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Administrador de Script">
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
            Uso de Script Mejorados
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<Switch />} label="Activar" labelPlacement="end" />
          </Grid>
        </Grid>
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Data exit">
        <DataExit />
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Semaforo">
        <Semaforo />
      </MainCard>
    </Grid>
  </Grid>
);

export default SystemOption;
