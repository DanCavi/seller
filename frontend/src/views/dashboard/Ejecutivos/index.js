// import { Typography } from '@mui/material';
import React from 'react';
// import MainCard from 'ui-component/cards/MainCard';
import { Card, Typography, Grid, Divider } from '@mui/material';

//IMPORT EJECUTIVOS
import EjecutivoCard from './components/CardEjecutivo';
//FIN IMPORT EJECUTIVOS
import { useTheme } from '@mui/material/styles';

// import url from 'baseUrl';
// import axios from 'axios';

const ejecutivos = [
  ['Maximiliano Bustamante', 10, 95, 20, 'Ejecutivo'],
  ['Andrés Peréz', 20, 65, 8, 'Ejecutivo comercial'],
  ['Luis Vasquez', 30, 98, 30, 'Gerente Comercial'],
  ['Mauricion Canales', 3, 30, 3, 'Gerente Riesgo']
];

// const URIGETALL = '/dashboard/ejecutivos/get-all-ejecutivos';
function Ejecutivos() {
  // const [ejecutivos, setEjecutivos] = useState([]);

  // React.useEffect(() => {
  //   axios
  //     .get(`${url.BASE_URL}${URIGETALL}`)
  //     .then((res) => {
  //       const data = res.data;
  //       const dataToShow = data.data.map((ejecutivo) => ({
  //         id: ejecutivo.id,
  //         nombre: ejecutivo.nombre + ' ' + ejecutivo.apellido,
  //         contacto: ejecutivo.mail,
  //         dni: ejecutivo.dni,
  //         cargo: ejecutivo.cargo,
  //         estado: ejecutivo.estado,
  //         fecha_registro: ejecutivo.fecha_registro,
  //         fecha_modificacion: ejecutivo.fecha_modificacion,
  //         metas_cumplidas: Math.floor(Math.random() * 100) + 1,
  //         deudores: Math.floor(Math.random() * 1000) + 1
  //       }));
  //       if (dataToShow) {
  //         console.log({
  //           message: 'Construcción de JSON exitoso',
  //           status: 200,
  //           datos: dataToShow
  //         });
  //         setEjecutivos(dataToShow);
  //       } else {
  //         console.log({
  //           message: 'Hubo problemas al formar el Array Json ejecutivos',
  //           response: res.data
  //         });
  //       }
  //       console.log({
  //         message: 'Extracción exitosa',
  //         status: 200,
  //         response: res.data
  //       });
  //     })
  //     .catch((err) => {
  //       console.error({
  //         message: 'Error al extraer datos',
  //         status: 402,
  //         error: err
  //       });
  //     });
  // }, []);
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
              cargo={ejecutivo.cargo}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Ejecutivos;
