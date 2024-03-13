import { Box, Grid, Paper, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { FirstTab, SecondTab, ThirdTab } from './TabsComponent.js';

const MenuEjecutivo = ({ ejecutivo }) => {
  console.log(ejecutivo)
  const [value, setValue] = useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <Grid item xs={8}>
      <Paper
        sx={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Clientes" value={0} />
          <Tab label="Mensajes" value={1} />
          <Tab label="Productos" value={2} />
        </Tabs>
        <Box flex={1} display={'flex'} flexDirection={'column'}>

            {/* Tab1 */}
          {value === 0 && (
            <FirstTab />
          )}

          {/* Tab2 */}
          {value === 1 && (
            <SecondTab />
          )}

          {/* Tab3 */}
          {value === 2 && (
            <ThirdTab />
          )}

        </Box>
      </Paper>
    </Grid>
  );
};

export default MenuEjecutivo;
