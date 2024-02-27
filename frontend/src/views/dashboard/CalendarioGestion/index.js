// // material-ui
// import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Calendario from './components/Calendario';
import Filtro from './components/SeccionFiltro';
// import { Grid } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| SAMPLE PAGE ||============================== //

const CalendarioGestion = () => (
  <MainCard title="Calendario Gestión">
    <Calendario />
    <SubCard title="Filtro" style={{ marginTop: 10 }}>
      <Filtro />
    </SubCard>
  </MainCard>
);

export default CalendarioGestion;
