// material-ui
import { Grid } from '@mui/material';
import { ControlVentas, Prospecto } from './views';


// ==============================|| SAMPLE PAGE ||============================== //

const DataExit = () => {


  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Prospecto />
      </Grid>
      <Grid item xs={12}>
        <ControlVentas />
      </Grid>
    </Grid>
  );

}

export default DataExit