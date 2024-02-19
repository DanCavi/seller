// material-ui
import { FormControl, Typography, TextField, Grid, Button } from '@mui/material';
import { IconLink } from '@tabler/icons-react';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const EstadoEC2 = () => (
  <MainCard title="Estado EC2">
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography variant="body1">
          <FormControl fullWidth>
            <TextField
            select
            label = "Select">

            </TextField>
          </FormControl>
        </Typography>
      </Grid>
      <Grid item xs={6}>
         <Button variant ="contained" fullWidth startIcon={<IconLink/>}>
            <Typography variant="body1">Iniciar</Typography>
         </Button>
      </Grid>
    </Grid>
  </MainCard>
);

export default EstadoEC2