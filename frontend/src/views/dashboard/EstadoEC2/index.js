// material-ui
import { FormControl, Typography, Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import { IconLink } from '@tabler/icons-react';
import SelectStandar from 'ui-component/Select/Select';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const EstadoEC2 = () => (
  <MainCard title="Estado EC2">
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography variant="body1">
          <FormControl fullWidth>
            <SelectStandar
              datos={['https://aiengine.ecloudapp.site', 'https://motorws.ecloudapp.site/', 'https://motorws2.ecloudapp.site/', 'https://motorws3.ecloudapp.site/']}
            />
          </FormControl>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" fullWidth startIcon={<IconLink />} size="large">
          <Typography variant="body1">Iniciar</Typography>
        </Button>
      </Grid>
      <Grid item xs={8}>
        <Box
          sx={{
            width: '100%',
            height: 300,
            bgcolor: 'black'
          }}
        >
          <Typography variant="body2" sx={{ color: 'white', m: 2 }}>
            Pinging ...
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </MainCard>
);

export default EstadoEC2;
