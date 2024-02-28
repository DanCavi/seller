import { Button, Grid, InputLabel, MenuItem, TextField, Select, Typography, Table, TableHead, TableRow, TableCell } from '@mui/material';
import { IconCopy, IconDeviceFloppy, IconCloudUpload } from '@tabler/icons-react';
import { styled } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import InputFecha from 'ui-component/InputFecha/InputFecha';
import SubCard from 'ui-component/cards/SubCard';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from './utils/utils';
import { useEffect, useState } from 'react';
import SelectStandar from 'ui-component/Select/Select';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
// ==============================|| SAMPLE PAGE ||============================== //

const AdministradorScript = () => {
  const array = [];
  const [data, setData] = useState(array);

  const fetchData = async () => {
    const response = await fetch('/administrador-script').then((response) => response.json());
    setData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const rows = data;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MainCard title="Configurar">
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ justifyContent: 'flex-end', display: 'flex' }}>
              <Button variant="contained" startIcon={<IconDeviceFloppy />}>
                Guardar script
              </Button>
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Nombre</InputLabel>
              <TextField fullWidth />
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Funnel Comercial</InputLabel>
              <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Canal</InputLabel>
              <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
            </Grid>
            <Grid item xs={7}>
              <InputLabel>Cc</InputLabel>
              <TextField fullWidth />
            </Grid>
            <Grid item xs={5}>
              <InputLabel>Cco</InputLabel>
              <TextField fullWidth />
            </Grid>
            <Grid item xs={3}>
              <InputLabel>Fecha Inicio Vigencia:</InputLabel>
              <InputFecha />
            </Grid>
            <Grid item xs={3}>
              <InputLabel>Fecha Fin Vigencia:</InputLabel>
              <InputFecha />
            </Grid>
            <Grid item xs={3}>
              <InputLabel>Campaña</InputLabel>
              <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
            </Grid>
            <Grid item xs={3}>
              <InputLabel>Estado</InputLabel>
              <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
            </Grid>
            <Grid item xs={12}>
              <SubCard title="Archivos Adjuntos" sx={{ mb: 2 }}>
              <Button
                fullWidth
                sx={{ mb: 2 }}
                component="label"
                variant="contained"
                tabIndex={-1}
                startIcon={<IconCloudUpload />}
              >
                Elegir archivo
                <VisuallyHiddenInput type="file" />
              </Button>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Creada</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
              </SubCard>
            </Grid>
            <Grid item xs={12}>
              <SubCard title="Agregar Variables" sx={{ mb: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <InputLabel>Tabla</InputLabel>
                    <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
                  </Grid>
                  <Grid item xs={4}>
                    <InputLabel>Variable</InputLabel>
                    <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
                  </Grid>
                  <Grid item xs={4}>
                    <InputLabel>Shortcode</InputLabel>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <TextField fullWidth inputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={6}>
                        <Button variant="contained" startIcon={<IconCopy />}>
                          <Typography>Copiar Shortcode</Typography>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </SubCard>
              <InputLabel>Header</InputLabel>
              <TextField fullWidth multiline rows={6} />
              <InputLabel>Cuerpo</InputLabel>
              <TextField fullWidth multiline rows={6} />
              <InputLabel>Footer</InputLabel>
              <TextField fullWidth multiline rows={6} />
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard title="Repositorio de Script">
          <DataGrid
            initialState={{
             pagination: {
               paginationModel: { page: 0, pageSize: 5 },
             }
           }}
            getRowHeight={() => 'auto'} 
            columns={columns} 
            rows={rows} 
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default AdministradorScript;
