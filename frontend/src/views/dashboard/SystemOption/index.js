import { InputLabel, TextField, Button, Grid, Select, MenuItem, FormControlLabel, Switch } from '@mui/material';
import { IconDeviceFloppy, IconPlus } from '@tabler/icons-react';
import MainCard from 'ui-component/cards/MainCard';
import { HourField } from './components';
import InputFecha from 'ui-component/InputFecha/InputFecha';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './utils/utils.js';
import { SeleccionPais, SeleccionMoneda, DataExit, Semaforo } from './views';
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
            <TextField size="small" fullWidth />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Button variant="contained" sx={{ mt: 3 }} fullWidth startIcon={<IconPlus />}>
              Agregar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <DataGrid rows={rows} columns={columns} />
          </Grid>
        </Grid>
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Selección Horario Hábil">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <InputLabel>Día de la Semana</InputLabel>
            <Select fullWidth size="small">
              <MenuItem>Lunes</MenuItem>
              <MenuItem>Martes</MenuItem>
              <MenuItem>Miercoles</MenuItem>
              <MenuItem>Jueves</MenuItem>
              <MenuItem>Viernes</MenuItem>
              <MenuItem>Sabado</MenuItem>
              <MenuItem>Domingo</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3}>
            <InputLabel>De</InputLabel>
            <HourField />
          </Grid>
          <Grid item xs={3}>
            <InputLabel>A</InputLabel>
            <HourField />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" size="small" sx={{ mt: 2.3 }} fullWidth startIcon={<IconPlus />}>
              Agregar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <DataGrid rows={rows} columns={columns} />
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
          <TextField size="small" fullWidth />
        </Grid>
        <Grid item xs={3}>
          <Select fullWidth size="small">
            <MenuItem>Segundos</MenuItem>
            <MenuItem>Minutos</MenuItem>
            <MenuItem>Horas</MenuItem>
            <MenuItem>Días</MenuItem>
            <MenuItem>Semanas</MenuItem>
            <MenuItem>Meses</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' fullWidth startIcon={<IconDeviceFloppy />}>
            Guardar
          </Button>
        </Grid>
        <Grid item xs={3}>
          Limite de frases por conversación
        </Grid>
        <Grid item xs={3}>
          <TextField size="small" fullWidth />
        </Grid>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' fullWidth startIcon={<IconDeviceFloppy />}>
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
            <Select size="small" fullWidth>
              <MenuItem>Tasa Finalización</MenuItem>
              <MenuItem>Tasa Pago</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={4}>
            <Button variant='contained' fullWidth startIcon={<IconDeviceFloppy />}>
              Guardar
            </Button>
          </Grid><Grid item xs={4}>
            Prioridad
          </Grid>
          <Grid item xs={4}>
            <Select size="small" fullWidth>
              <MenuItem>Tasa Finalización</MenuItem>
              <MenuItem>Tasa Pago</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={4}>
            <Button variant='contained' fullWidth startIcon={<IconDeviceFloppy />}>
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
