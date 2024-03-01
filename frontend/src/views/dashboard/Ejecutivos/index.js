
import { Card, Typography, Grid, Divider } from '@mui/material';

//IMPORT EJECUTIVOS
import EjecutivoCard from './components/CardEjecutivo';
//FIN IMPORT EJECUTIVOS
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import url from 'baseUrl';

const urlModulo = '/ejecutivos';
const URIGETALL = `${url.BASE_URL}${urlModulo}`;

function Ejecutivos() {
  const [ejecutivos, setEjecutivos] = useState([]);

  useEffect(() => {
    axios
      .get(URIGETALL)
      .then((response) => {
        setEjecutivos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
        {ejecutivos.map((ejecutivo, index) => (
          <Grid item md={3} xs={12} key={index}>
            <EjecutivoCard
              nombre={ejecutivo.nombre}
              cantidadDeudores={ejecutivo.deudores}
              porcentajeMetasCumplidas={ejecutivo.metas_cumplidas}
              gestiones={index[3]}
              cargo={ejecutivo.perfil.nombre}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Ejecutivos;
