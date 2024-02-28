// material-ui
import { InputLabel } from '@material-ui/core';
import { Button, Grid } from '@mui/material';
import Input from 'ui-component/Input/Input';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const CrearProspecto = () => (
  <MainCard title="Validar Prospecto">
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <InputLabel>Nombre</InputLabel>
        <Input />
        <InputLabel>Telefono</InputLabel>
        <Input />
        <InputLabel>Nacionalidad</InputLabel>
        <Input />
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          onClick={() => {
            alert("Guardado con exito");
          }}>
          Guardar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <InputLabel>Apellido</InputLabel>
        <Input />
        <InputLabel>Dni</InputLabel>
        <Input />
        <InputLabel>Correo</InputLabel>
        <Input />
      </Grid>
    </Grid>

  </MainCard>
);

export default CrearProspecto