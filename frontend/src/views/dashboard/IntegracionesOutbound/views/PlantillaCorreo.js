import { Grid, InputLabel, Select, TextField, MenuItem, Button } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import MainCard from 'ui-component/cards/MainCard';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './utils/utils';
import InputFecha from 'ui-component/InputFecha/InputFecha';


const PlantillaCorreo = () => {
  return (
    <MainCard title="Plantilla de Correo">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <InputLabel>Nombre</InputLabel>
          <TextField size="small" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <InputLabel>Correo</InputLabel>
          <Select size="small" fullWidth>
            <MenuItem>Test</MenuItem>
            <MenuItem>Test2</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2.5}>
          <InputLabel>Fecha Inicio</InputLabel>
          <InputFecha />
        </Grid>
        <Grid item xs={2.5}>
          <InputLabel>Fecha Fin</InputLabel>
          <InputFecha />
        </Grid>
        <Grid item xs={3} sx={{ mt: 2.4 }}>
          <Button variant="contained" fullWidth startIcon={<IconPlus />}>Agregar plantilla</Button>
        </Grid>
        <Grid item xs={12}>
          <DataGrid 
            columns={columns}
            rows={rows}
          />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default PlantillaCorreo;
