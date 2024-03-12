import { Grid, Paper, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

const MenuEjecutivo = () => {
  const [value, setValue] = useState(0);
  function handleChange (event, newValue) {
    setValue(newValue);
  }
  return (
    <Grid item xs={8}>
      <Paper
        sx={{
          minHeight: '100%'
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Clientes" value={0} />
          <Tab label='Mensajes' value={1}/>
          <Tab label="Productos" value={2} />
        </Tabs>
      </Paper>
    </Grid>
  );
};

export default MenuEjecutivo;
