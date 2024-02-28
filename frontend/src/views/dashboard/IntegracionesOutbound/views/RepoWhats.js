import { Button, Grid, InputLabel } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { IconPlus } from '@tabler/icons-react';
import { columns, rows } from './utils/utils';
import MainCard from 'ui-component/cards/MainCard';
import SelectStandar from 'ui-component/Select/Select';
import Input from 'ui-component/Input/Input';

const RepoWhats = () => {
  return (
    <MainCard title="Repositorio de Motor Whatsapp">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <InputLabel>Nombre</InputLabel>
          <Input />
        </Grid>
        <Grid item xs={3}>
          <InputLabel>Codigo</InputLabel>
          <Input />
        </Grid>
        <Grid item xs={3}>
          <InputLabel>Telefono</InputLabel>
          <SelectStandar datos={['hola']} value={'3'} onChange={() => {}} />
        </Grid>
        <Grid item xs={3} sx={{ mt: 2.4 }}>
          <Button variant="contained" fullWidth startIcon={<IconPlus />}>
            Agregar grupo
          </Button>
        </Grid>
        <Grid item xs={12}>
          <DataGrid columns={columns} rows={rows} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default RepoWhats;
