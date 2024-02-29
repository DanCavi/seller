// project imports
import { Button, Grid, InputLabel, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { IconFilter, IconRefresh } from '@tabler/icons-react';
import MainCard from 'ui-component/cards/MainCard';
import { columns, rows } from './utils/utils';
import SelectStandar from 'ui-component/Select/Select';

// ============================|| MATERIAL ICONS ||============================ //

const MaestroLeads = () => {
  return (
    <MainCard title="Maestro Leads">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <IconFilter size={20} /> Filtros{' '}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Canal Entrada</InputLabel>
          <SelectStandar datos={['hola']} value={'3'} onChange={() => {}} />
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Funnel Comercial</InputLabel>
          <SelectStandar datos={['hola']} value={'3'} onChange={() => {}} />
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Producto</InputLabel>
          <SelectStandar datos={['hola']} value={'3'} onChange={() => {}} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" startIcon={<IconRefresh />} size="small">
            Recargar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <DataGrid autoHeight columns={columns} rows={rows} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default MaestroLeads;
