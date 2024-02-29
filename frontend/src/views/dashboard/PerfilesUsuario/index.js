// material-ui
import { Paper } from '@mui/material';
import { DataGridPerfiles } from './components';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';



const PerfilesUsuario = () => {


  return (
    <MainCard title="Perfiles">
      <Paper sx={{ p: 3 }}>
        <SubCard title="Perfiles en el sistema">
          <DataGridPerfiles />
        </SubCard>
      </Paper>
    </MainCard>
  );
};

export default PerfilesUsuario;
