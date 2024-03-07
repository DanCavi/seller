import { Button, Grid, InputLabel, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import MainCard from 'ui-component/cards/MainCard';
import SelectStandar from 'ui-component/Select/Select';
import { ExampleCSV, UploadFile, columns } from './utils.js/UtilsCSV';
import { useState, useEffect } from 'react';
import axios from 'axios';




// ==============================|| SAMPLE PAGE ||============================== //

const CargaDeDatos = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => () =>  {
    axios
      .post('/api/v1/usuarios', rows)
      .then((data) => {
        console.log(data)
      })
  }, [rows, setRows])

  return (

    
    <MainCard title="Modulo de Cargas">
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <InputLabel>Seleccione canal para subir datos</InputLabel>
        <SelectStandar datos={['Archivo Local']} value={''} />
      </Grid>
      <Grid item xs={12}>
        <InputLabel>Seleccione la data cargada</InputLabel>
        <SelectStandar datos={['Prospecto', 'Campaña']} value={''} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>
          Descargar ejemplo CSV <ExampleCSV />
        </Typography>
        <UploadFile setRows={setRows}/>
      </Grid>
      <Grid item xs={12}>
        <DataGrid
          autoHeight 
          rows={rows} 
          columns={columns} 
          sx={{ mb: 2 }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10
              }
            }
          }}
          pageSizeOptions={[10, 20, 30]}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            alert('Carga de datos exitosa');
          }}
          >
          Cargar
        </Button>
      </Grid>
    </Grid>
  </MainCard>
  )
};

export default CargaDeDatos;
