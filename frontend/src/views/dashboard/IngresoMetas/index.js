import { Button, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { IconUsersGroup } from '@tabler/icons-react';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const IngresoMetas = () => {
  return (
    <MainCard title="Metas">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <InputLabel>Año</InputLabel>
          <Select size="small" fullWidth>
            <MenuItem>2023</MenuItem>
            <MenuItem>2024</MenuItem>
            <MenuItem>2025</MenuItem>
            <MenuItem>2026</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={10}>

          <Button variant="contained" size='small' startIcon={<IconUsersGroup />}></Button>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default IngresoMetas;
