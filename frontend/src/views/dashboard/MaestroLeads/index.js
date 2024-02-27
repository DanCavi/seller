// project imports
import { Button, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { IconFilter, IconRefresh } from '@tabler/icons-react';
import MainCard from 'ui-component/cards/MainCard';
import { columns, rows } from './utils/utils';

// ============================|| MATERIAL ICONS ||============================ //

const MaestroLeads = () => (
  <MainCard title="Maestro Leads">
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='subtitle1'><IconFilter size={20}/> Filtros </Typography>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>Canal Entrada</InputLabel>
        <Select fullWidth size="small">
          <MenuItem>Todos</MenuItem>
          <MenuItem>Whatsapp</MenuItem>
          <MenuItem>Chat</MenuItem>
          <MenuItem>Correo</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>Funnel Comercial</InputLabel>
        <Select fullWidth size="small">
          <MenuItem>Prospecto</MenuItem>
          <MenuItem>Cotización</MenuItem>
          <MenuItem>Orden de Compra</MenuItem>
          <MenuItem>Cliente</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>Producto</InputLabel>
        <Select fullWidth size="small">
          <MenuItem>Todos</MenuItem>
          <MenuItem>GO911</MenuItem>
          <MenuItem>MAF</MenuItem>
          <MenuItem>Provida</MenuItem>
          <MenuItem>USJMX</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" startIcon={<IconRefresh />} size='small'>Recargar</Button>
      </Grid>
      <Grid item xs={12}>
        <DataGrid
          columns={columns}
          rows={rows}
        />
      </Grid>

    </Grid>
  </MainCard>
);

export default MaestroLeads;
