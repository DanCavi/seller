// import { useEffect, useState } from 'react';

// material-ui
// import { Grid } from '@mui/material';

// project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
// import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import AnalisisChart from './components/AnalisisChart';
import ProyeccionChart from './components/ProyeccionChart';
import IngresosChart from './components/IngresosChart';
import ProspectosChart from './components/ProspectosChart';
import { Grid } from '@mui/material';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  // const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MainCard title="Análisis">
          <AnalisisChart/>
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard title="Proyección">
          <ProyeccionChart/>
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard title="Ingresos">
          <IngresosChart/>
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard title="Análisis">
          <AnalisisChart/>
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard title="Prospectos">
          <ProspectosChart/>
        </MainCard>
      </Grid>
    </Grid>
    
  );
};

export default Dashboard;
