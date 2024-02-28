import React, { useState } from 'react';
//import material ui
import { Grid, Stack, Typography, Box, Tab } from '@mui/material';
//Tabs
import { TabContext, TabList, TabPanel } from '@mui/lab';
//import nodos Add
import InputAdd from '../inputAdd';
import OutputAdd from '../outputAdd';
import ListeningAddNode from '../listening/listeningAddNode';
import WaitAddNode from '../esperar/waitAddNode';
import SemanticoAddNode from '../semantico/semanticoAddNode';
import CutAddNode from '../filtrar/filterAddNode';
import ScriptAddNode from '../script/scriptAddNode';
import EjecutarWebServiceAddNode from '../actions/actionEjecutarWebServiceAddNode';
import ActionDerivarEjecutivoAddNode from '../actions/actionDerivarEjecutivoAddNode';
import IfAddNode from '../condiciones/ifAddNode';
import ElseAddNode from '../condiciones/elseAddNode';
import ElseIfAddNode from '../condiciones/elseIfAddNode';
import ForAddNode from '../condiciones/forAddNode';
import CorreoAddNode from '../canales/correoAddNode';
import SmsAddNode from '../canales/smsAddNode';
import WhatsappAddNode from '../canales/whatsappAddNode';
import Responder from '../actions/responderAdd';
import { useTheme } from '@mui/material';

function SideBarNodos() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  return (
    <Stack direction={{ xs: 'row', md: 'column', sm: 'row' }} spacing={2}>
      <Grid item sx={{ width: '100%', pl: 1 }}>
        <Grid justify="center" alignItems="center">
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '13px',
              color: theme.palette.grey[500]
            }}
          >
            Nodos
          </Typography>
        </Grid>

        <Box sx={{ width: '100%', typography: 'body1', overflow: 'auto' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList variant="scrollable" scrollButtons="auto" onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Acciones" value="1" />
                <Tab label="Condiciones" value="2" />
                <Tab label="Canal" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ p: 1 }}>
              <Stack direction="row" spacing={2}>
                <Grid item md={4} sx={{ width: '100%', pb: 1 }}>
                  <InputAdd />
                </Grid>
                <Grid item md={4} sx={{ width: '100%', pb: 1 }}>
                  <OutputAdd />
                </Grid>
                <Grid item md={4} sx={{ width: '100%', pb: 1 }}>
                  <EjecutarWebServiceAddNode />
                </Grid>
                <Grid item md={4} sx={{ width: '100%' }} pb={1}>
                  <ActionDerivarEjecutivoAddNode />
                </Grid>
                <Grid item md={4} sx={{ width: '100%' }} pb={1}>
                  <ListeningAddNode />
                </Grid>
                <Grid item md={4} sx={{ width: '100%' }} pb={1}>
                  <WaitAddNode />
                </Grid>
                <Grid item md={4} sx={{ width: '100%' }} pb={1}>
                  <SemanticoAddNode />
                </Grid>
                <Grid item md={4} sx={{ width: '100%' }} pb={1}>
                  <CutAddNode />
                </Grid>
                <Grid item md={4} sx={{ width: '100%' }} pb={1}>
                  <ScriptAddNode />
                </Grid>
                <Grid item md={4} sx={{ width: '100%' }} pb={1}>
                  <Responder />
                </Grid>
              </Stack>
            </TabPanel>
            <TabPanel value="2" sx={{ p: 1 }}>
              <Stack direction="row" spacing={2}>
                <Grid item md={1} sx={{ width: '100%' }}>
                  <IfAddNode />
                </Grid>
                <Grid item md={1} sx={{ width: '100%' }}>
                  <ElseAddNode />
                </Grid>
                <Grid item md={1} sx={{ width: '100%' }}>
                  <ElseIfAddNode />
                </Grid>
                <Grid item md={1} sx={{ width: '100%' }}>
                  <ForAddNode />
                </Grid>
              </Stack>
            </TabPanel>
            <TabPanel value="3" sx={{ p: 1 }}>
              <Stack direction="row" spacing={2}>
                <Grid item md={2} pb={1}>
                  {' '}
                  <CorreoAddNode />{' '}
                </Grid>
                <Grid item md={2} pb={1}>
                  {' '}
                  <SmsAddNode />{' '}
                </Grid>
                <Grid item md={2} pb={1}>
                  {' '}
                  <WhatsappAddNode />{' '}
                </Grid>
              </Stack>
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Stack>
  );
}

export default SideBarNodos;
