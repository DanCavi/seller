// material-ui
import React, { useState } from 'react';
import { Grid } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
// import WorkFlow from './workFlow';
// import Test from './reactFlowTest';
// import Custom from './indexCustom';
import DnDFlow from './workFlow/dragAndDrop';
import Tabla from './workFlow/tabla/tabla';
import SubCard from 'ui-component/cards/SubCard';
//Proyecto mainCard
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
//Import Icons
import PaymentsIcon from '@mui/icons-material/Payments';

// ==============================|| SAMPLE PAGE ||============================== //
function InteligenciaPayments() {
  const [editionActive, setEditionActive] = useState(false);
  const [flowById, setFlowById] = useState([]);

  //manejador funcion extracion de datos desde tabla
  const handleDataFlowById = async (datosFlowById) => {
    setFlowById(datosFlowById);
  };
  console.log('Data from tabla:', flowById);
  //estado para click de edicion

  //manejador de estado de edicion desde tabla
  const handleEditionActive = () => {
    setEditionActive(true);
  };
  console.log('estado de edicion :', editionActive);
  //fin estados
  return (
    <MainCard
      title="Inteligencia Maquina"
      secondary={<SecondaryAction title="Payments" icon={<PaymentsIcon fontSize="small" id="workflow" />} />}
    >
      <DnDFlow editOn={editionActive} setEditionActive={setEditionActive} />

      <SubCard title="Repositorio de Arbol Risk Tier">
        <Grid>
          <Tabla dataFlow={handleDataFlowById} onClick={handleEditionActive} />
        </Grid>
      </SubCard>
    </MainCard>
  );
}

export default InteligenciaPayments;
