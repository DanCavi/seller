// material-ui
import { Button, Grid, TextField } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const CrearProspecto = () => (
  <MainCard title="Validar Prospecto">
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          size='small'
          fullWidth
          label="Nombre"
          sx={{ mb: 2 }}/>
        <TextField
          size='small'
          fullWidth
          label="Teléfono"
          sx={{ mb: 2 }}/>
        <TextField
          size='small'
          fullWidth
          label="Nacionalidad"/>
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
        <TextField
          size='small'
          fullWidth
          label="Apellido"
          sx={{ mb: 2 }}/>
        <TextField
          size='small'
          fullWidth
          label="DNI"
          sx={{ mb: 2 }}/>
        <TextField
          size='small'
          fullWidth
          label="Correo"
          sx={{ mb: 2 }}/>
      </Grid>
    </Grid>

  </MainCard>
);

export default CrearProspecto