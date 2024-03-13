import { CircularProgress, Grid } from '@mui/material';
import MenuEjecutivo from './components/MenuEjecutivo';
import { useParams } from 'react-router-dom';
import { useEffect, useState, lazy } from 'react';
import { getEjecutivo } from './api';
import { Suspense } from 'react';

const PerfilEjecutivo = lazy(() => import('./components/PerfilEjecutivo'));

const Ejecutivo = () => {
  const { id } = useParams();
  const [ejecutivo, setEjecutivo] = useState();

  useEffect(() => {
    getEjecutivo(id)
      .then((data) => setEjecutivo(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Grid container spacing={6} height={'100%'}>
      <Suspense fallback={<CircularProgress />}>
        { ejecutivo && 
        <>
          <PerfilEjecutivo ejecutivo={ejecutivo} />
          <MenuEjecutivo ejecutivo={ejecutivo} />
        </>
           }
      </Suspense>

    </Grid>
  );
};
export default Ejecutivo;
