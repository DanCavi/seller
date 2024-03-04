import { Grid, InputLabel, Button } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import MainCard from 'ui-component/cards/MainCard';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './utils/utils';
import InputFecha from 'ui-component/InputFecha/InputFecha';
import SelectStandar from 'ui-component/Select/Select';
import Input from 'ui-component/Input/Input';

const PlantillaCorreo = () => {
  return (
    <MainCard title="Plantilla de Correo">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <InputLabel>Nombre</InputLabel>
          <Input />{' '}
        </Grid>
        <Grid item xs={2}>
          <InputLabel>Correo</InputLabel>
          <SelectStandar datos={['soporte.tecnico@ast.education']} />
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
          <Button variant="contained" fullWidth startIcon={<IconPlus />}>
            Agregar plantilla
          </Button>
        </Grid>
        <Grid item xs={12}>
          <DataGrid autoHeight columns={columns} rows={rows} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default PlantillaCorreo;
