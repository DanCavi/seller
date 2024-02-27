import { Button, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { IconDeviceFloppy } from '@tabler/icons-react';
import { useState } from 'react';
import { GridMetas, ButtonList } from './components';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const IngresoMetas = () => {
  const [year, setYear] = useState(2023);
 

  return (
    <MainCard title="Metas">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <InputLabel>Año</InputLabel>
          <Select
            size="small"
            fullWidth
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2024">2024</MenuItem>
            <MenuItem value="2025">2025</MenuItem>
            <MenuItem value="2026">2026</MenuItem>
          </Select>
        </Grid>

        <ButtonList/>
        
        <Grid item xs={12}>
          <Button variant="contained" startIcon={<IconDeviceFloppy />}>Guardar</Button>
        </Grid>
        <Grid item xs={12}>
          <GridMetas/>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default IngresoMetas;
