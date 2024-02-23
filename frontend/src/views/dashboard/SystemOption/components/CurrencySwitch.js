import { Grid, FormControlLabel, Switch, Typography, Button } from '@mui/material';
import { IconTrash } from '@tabler/icons-react';

const CountrySwitch = ({ name }) => {
  return (
    <Grid item xs={6}>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle1">{name}</Typography>
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel control={<Switch />} label="Activar" labelPlacement="end" />
        </Grid>
        <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="outlined">
            <IconTrash />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CountrySwitch;
