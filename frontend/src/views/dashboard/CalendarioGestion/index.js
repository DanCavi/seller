// // material-ui
// import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Calendar from './calendar';
import Filtro from './seccionFiltro';
// import { Grid } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Calendario = () => (
  <MainCard title="Calendario Gestión">
    <Calendar />
    <SubCard title="Filtro" style={{ marginTop: 10 }}>
      <Filtro />
    </SubCard>
  </MainCard>
);

export default Calendario;
