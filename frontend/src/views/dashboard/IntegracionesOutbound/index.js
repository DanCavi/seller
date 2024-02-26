// material-ui
import { Grid } from '@mui/material';

// project imports
import { RepoWhats, PlantillaCorreo, AsignacionChat } from './views';

// ==============================|| SAMPLE PAGE ||============================== //

const IntegracionesOutbound = () => {



  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <RepoWhats />
      </Grid>
      <Grid item xs={12}>
      <PlantillaCorreo />
      </Grid>
      <Grid item xs={12}>
      <AsignacionChat />
      </Grid>
    </Grid>

  );
}

export default IntegracionesOutbound