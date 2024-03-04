import { Button, Grid, InputLabel } from '@mui/material';
import { IconDeviceFloppy, IconPlus } from '@tabler/icons-react';
import MainCard from 'ui-component/cards/MainCard';
import SelectStandar from 'ui-component/Select/Select';
import Input from 'ui-component/Input/Input';
import { useState } from 'react';
import React from 'react';

const VariableForm = () => {
  return (
    <>
      <Grid item xs={4}>
        <InputLabel>Origen Variable</InputLabel>
        <SelectStandar datos={['Whatsapp', 'Facebook', 'Zapier', 'Wordpress', 'USJMX']} />
      </Grid>
      <Grid item xs={4}>
        <InputLabel>Variable</InputLabel>
        <SelectStandar datos={['Compra', 'Cotización', 'Correo', 'DNI']} />
      </Grid>
      <Grid item xs={2}>
        <InputLabel>Operador</InputLabel>
        <SelectStandar datos={['<', '>', '<=', '>=', '==']} />
      </Grid>
      <Grid item xs={2}>
        <InputLabel>Filtro</InputLabel>
        <SelectStandar datos={['1 Mes', '3 Meses', '6 Mese', '12 Meses']} />
      </Grid>
    </>
  );
};

const RepoFunn = () => {
  const [variables, setVariables] = useState([<VariableForm key={0} />]);

  const handleAddClick = () => {
    setVariables([...variables, <VariableForm key={variables.length} />]);
  };

  return (
    <MainCard title="Repositorio de Funnel Comercial">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" size="small" startIcon={<IconDeviceFloppy />}>
            Guardar regla
          </Button>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>País</InputLabel>
          <SelectStandar datos={['Internacional', 'Chile', 'USA']} />
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Tipo</InputLabel>
          <SelectStandar datos={['Natural', 'Juridico']} />
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Nombre</InputLabel>
          <Input />
        </Grid>
        {variables.map((variable, index) => (
          <React.Fragment key={index}>
            {variable}
          </React.Fragment>
        ))}
        <Grid item xs={12}>
          <Button variant="contained" size="small" startIcon={<IconPlus />} onClick={handleAddClick}>
            Agregar Variable
          </Button>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default RepoFunn;
