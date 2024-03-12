import { Grid, InputLabel, Button, Tooltip } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { ButtonList } from './components';
import { IconCopy } from '@tabler/icons-react';
import SelectStandar from 'ui-component/Select/Select';
import Input from 'ui-component/Input/Input';
import { useEffect, useState } from 'react';
import { getColumns, getTablas } from '../api';
import { ClickAwayListener } from '@material-ui/core';

const Prospecto = () => {
  const [tablas, setTablas] = useState([]);
  const [columnas, setColumnas] = useState([]);
  const [selectedTabla, setSelectedTabla] = useState('');
  const [selectedColumna, setSelectedColumna] = useState('');
  const [modulo, setModulo] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTablas()
      .then(
        respuesta => setTablas(respuesta)
      )
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (selectedTabla) {
    getColumns(selectedTabla)
      .then(
        respuesta => setColumnas(respuesta)
        
      )
      .catch(err => console.log(err))}
  }, [selectedTabla])

  const handleCopy = () => {
    navigator.clipboard.writeText(`{${selectedTabla}:${selectedColumna}}`)
    setOpen(true)
  }

  return (
    <MainCard title="Prospecto">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputLabel>Seleccione el modulo</InputLabel>
          <SelectStandar datos={['Maestro Leads', 'Crea prospecto', 'Seguimiento humano']}
            value={modulo} onChange={e => setModulo(e.target.value)} />
        </Grid>
        <Grid item xs={12}>
          <ButtonList />
        </Grid>
        <Grid item xs={3}>
          <InputLabel>Seleccione tabla</InputLabel>
          <SelectStandar datos={tablas} value={selectedTabla} onChange={e => setSelectedTabla(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <InputLabel>Seleccione campo</InputLabel>
          <SelectStandar datos={columnas} value={selectedColumna} onChange={e => setSelectedColumna(e.target.value)} />
        </Grid>
        <Grid container spacing={2}  item xs={6}>
          <Grid item xs={2}></Grid>
          <Grid item xs={6}>
            <InputLabel>Shortcode</InputLabel>
            <Input readOnly value={`{${selectedTabla}:${selectedColumna}}`}  />
          </Grid>
          <Grid item xs={4}>
            <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Tooltip
              title='Copiado a la clipboard'
              disableFocusListener
              disableTouchListener
              disableHoverListener
              open={open}
              onClose={() => setOpen(false)}
              enterNextDelay={1000}
              arrow
              placement='top'
              sx={{ 
                backgroundColor: 'white',
               }}
              >
              <Button variant="contained" onClick={handleCopy} sx={{ mt: 3.5 }} startIcon={<IconCopy />}>
                Copiar Shortcode
              </Button>
            </Tooltip>
            </ClickAwayListener>
        </Grid>  
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Prospecto;
