// material-ui
import { Grid, InputLabel, Button, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { IconInfoCircle } from '@tabler/icons-react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SelectStandar from 'ui-component/Select/Select';
import Input from 'ui-component/Input/Input';

// ==============================|| SAMPLE PAGE ||============================== //

const VariableWorkshop = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <MainCard title="Taller de variables">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <InputLabel>Tipo Persona</InputLabel>
            <SelectStandar datos={['Natural', 'Juridico']} />
            <InputLabel>País</InputLabel>
            <SelectStandar datos={['Chile', 'USA', 'ETC...']} />
            <InputLabel>Origen variable</InputLabel>
            <SelectStandar datos={['Datos', 'ETC...']} />
            <Grid container spacing={2} alignItems={'center'}>
              <Grid item xs={8}>
                <InputLabel>Variable</InputLabel>
                <SelectStandar datos={['MAPEAR....']} />
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained">Agregar</Button>
              </Grid>
              <Grid item xs={4}>
                <InputLabel>Operadores Aritméticos</InputLabel>
                Botones
              </Grid>
              <Grid item xs={4}>
                <InputLabel>Constante K</InputLabel>
                <Input />
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained">Agregar</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Nombre Variable</InputLabel>
            <Input />{' '}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={4}>
                <Button fullWidth variant="contained">
                  Nueva
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button fullWidth variant="contained">
                  Validar Sintaxis
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button fullWidth variant="contained">
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MainCard>
    </Grid>
    <Grid item xs={12} sx={{ mt: 2 }}>
      <MainCard title="Pruebas de Variable">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container spacing={2} alignItems={'center'}>
              <Grid item xs={4}>
                <InputLabel>Correo/Dni</InputLabel>
                <Input />
              </Grid>
              <Grid item xs={4}>
                <InputLabel>Variables Creadas</InputLabel>
                <SelectStandar datos={['Tasa finalización', 'Tasa de pago']} />
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" fullWidth>
                  Examinar
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption">
                  <IconInfoCircle size={12} /> Ingrese un rut y seleccione la variable a examinar, el sistema buscará el log del registro
                  mas actual de una evaluación. En caso de no encontrar registros de log, realice una nueva evaluación.
                </Typography>
              </Grid>
            </Grid>
            <Table sx={{ border: 1 }} size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Estadísticas de Pruebas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>- Nombre Variable</TableCell>
                  <TableCell align="right">Test</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>- Valor</TableCell>
                  <TableCell align="right">0.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">
              <IconInfoCircle size={12} /> Para ingresar decimales utilice el punto(.) Formato Ejemplo: 0.00
            </Typography>
            <Table sx={{ border: 1 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Definición Formula</TableCell>
                  <TableCell>Ingrese Valor</TableCell>
                  <TableCell>Fuente</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ textAlign: 'center' }}>No data available in table</TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </MainCard>
    </Grid>
  </Grid>
);

export default VariableWorkshop;
