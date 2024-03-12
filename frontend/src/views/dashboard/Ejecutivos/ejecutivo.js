import { Grid } from '@mui/material';
import PerfilEjecutivo from './components/PerfilEjecutivo';
import MenuEjecutivo from './components/MenuEjecutivo';
// import { useNavigate } from "react-router-dom"

const Ejecutivo = (props) => {
  console.log(props);

  return (
    <Grid container spacing={6}>
      <PerfilEjecutivo />
      <MenuEjecutivo />

    </Grid>
  );
};
export default Ejecutivo;
