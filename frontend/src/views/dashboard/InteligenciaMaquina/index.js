import MainCard from 'ui-component/cards/MainCard';
import RiskFlow from './components/RiskFlow';
import { Grid } from '@mui/material';

// ==============================|| SAMPLE PAGE ||============================== //

const InteligenciaMaquina = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <MainCard title="Risk Tier Tree">
        <RiskFlow />
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Repositorio">
        
      </MainCard>
    </Grid>
  </Grid>
);

export default InteligenciaMaquina