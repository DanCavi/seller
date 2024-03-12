
import { Card, Typography, Grid, Divider } from '@mui/material';

//IMPORT EJECUTIVOS
import EjecutivoCard from './components/CardEjecutivo';
//FIN IMPORT EJECUTIVOS
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useEffect } from 'react';
import { getData } from './api';
import { useNavigate } from 'react-router-dom';


function Ejecutivos() {
  const [ejecutivos, setEjecutivos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData()
      .then((data) => setEjecutivos(data))
      .catch((error) => console.log(error));
  }, []);


  const theme = useTheme();
  return (
    <>
      <Grid container mb={3} sx={{ width: '100%' }}>
        <Grid item sx={{ width: '100%' }}>
          <Card>
            <Grid item p={3}>
              <Typography variant="h3">Lista de Ejecutivos</Typography>
            </Grid>
            <Grid mb={2}>
              <Divider sx={{ border: '1px solid ', color: `${theme.palette.primary.main}` }} />
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {ejecutivos.map((ejecutivo) => (
          <Grid item md={3} xs={12} key={ejecutivo.usuario_id}>
            <EjecutivoCard
              nombre={ejecutivo.nombre + ' ' + ejecutivo.apellido}
              cantidadDeudores={ejecutivo.deudores}
              porcentajeMetasCumplidas={ejecutivo.metas_cumplidas}
              gestiones={0}
              cargo={ejecutivo.perfil}
              onClick={() => navigate(`/dashboard/ejecutivos/${ejecutivo.usuario_id}`)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Ejecutivos;
