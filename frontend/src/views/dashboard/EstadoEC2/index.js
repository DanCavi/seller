// material-ui
import { FormControl, Typography, TextField, Grid, Button, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
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
              <MenuItem value='Test'>Test</MenuItem>
              <MenuItem value='Test2'>Test2</MenuItem>
              <MenuItem value='Test3'>Test3</MenuItem>
            </TextField>
          </FormControl>
        </Typography>
      </Grid>
      <Grid item xs={6}>
         <Button variant ="contained" fullWidth startIcon={<IconLink/>} size='large'>
            <Typography variant="body1">Iniciar</Typography>
         </Button>
      </Grid>
      <Grid item xs = {8}>
        <Box
          sx={{
            width: '100%',
            height: 300,
            bgcolor: 'black' 
          }}>
            <Typography variant="body2" sx={{ color: 'white', m: 2 }}>Pinging ...</Typography>
        </Box>
      </Grid>
    </Grid>
  </MainCard>
);

export default EstadoEC2