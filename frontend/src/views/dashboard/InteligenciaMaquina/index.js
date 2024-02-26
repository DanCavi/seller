import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import DnDFlow from './workFlow/dragAndDrop';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './utils';

// ==============================|| SAMPLE PAGE ||============================== //

const InteligenciaMaquina = () => {
  const [editionActive, setEditionActive] = useState(false);
  const [flowById, setFlowById] = useState([]);

  //manejador funcion extracion de datos desde tabla
  const handleDataFlowById = async (datosFlowById) => {
    setFlowById(datosFlowById);
  };
  console.log('Data from tabla:', flowById);
  console.log(handleDataFlowById)
  //estado para click de edicion

  //manejador de estado de edicion desde tabla
  const handleEditionActive = () => {
    setEditionActive(true);
  };
  console.log(handleEditionActive)
  console.log('estado de edicion :', editionActive);

  return (

    
    <Grid container spacing={2}>
    <Grid item xs={12}>
      <MainCard title="Sales Machine Flow">
        <DnDFlow editOn={editionActive} editionActive={editionActive} setEditionActive={setEditionActive} />
      </MainCard>
    </Grid>
    <Grid item xs={12}>
      <MainCard title="Repositorio">
        <DataGrid
          columns={columns}
          rows={rows}/>
      </MainCard>
    </Grid>
  </Grid>
  );

}

export default InteligenciaMaquina