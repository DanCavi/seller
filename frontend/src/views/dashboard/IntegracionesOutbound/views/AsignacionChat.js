import { Button, Grid, InputLabel } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { IconPlus } from '@tabler/icons-react';
import MainCard from 'ui-component/cards/MainCard';
import { columns, rows } from './utils/utils';
import SelectStandar from 'ui-component/Select/Select';
import Input from 'ui-component/Input/Input';

const AsignacionChat = () => {
  return (
    <MainCard title="Asignación Chat">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <InputLabel>Web</InputLabel>
          <Input />{' '}
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Producto</InputLabel>
          <SelectStandar datos={['GO911', 'MAF', 'Provida', 'USJMX']} />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" sx={{ mt: 2.7 }} fullWidth startIcon={<IconPlus />}>
            Agregar integración
          </Button>
        </Grid>
        <Grid item xs={12}>
          <DataGrid autoHeight columns={columns} rows={rows} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default AsignacionChat;
