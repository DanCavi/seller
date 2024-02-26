import { Grid, FormControlLabel, Switch, Typography } from '@mui/material';


const CountrySwitch = ({ name }) => {
  return (
    <Grid item xs={6}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle1">{name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel control={<Switch />} label="Activar" labelPlacement="end" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CountrySwitch;
