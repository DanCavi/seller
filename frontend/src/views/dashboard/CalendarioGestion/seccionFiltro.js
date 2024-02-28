import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import InputLabel from '@mui/material/InputLabel';
import { MenuItem, Select, ThemeProvider, createTheme, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import NativeSelect from '@mui/material/NativeSelect';
// import InputBase from '@mui/material/InputBase';

//Importar Proyectos

// =============== Estilos MUI ===========//
const theme = createTheme({
  components: {
    // Name of the component
    MuiFormControl: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '10px',
          fontSize: '10px'
        }
      }
    }
  }
});

function SeccionFiltro() {
  // == estados Iniciales == //
  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div
        style={{
          border: '1px solid rgba(200,200,200,0.5)',
          backgroundColor: 'white !important',
          padding: '10px',
          borderRadius: '2px'
        }}
      >
        <div className="row">
          <div className="col-xs12 col-md-3">
            <div className="form-body">
              <div className="form-group">
                <ThemeProvider theme={theme}>
                  <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{ fontSize: '15px' }}>
                      Cliente
                    </FormLabel>
                    {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
                    <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={age} onChange={handleChange} size="small">
                      <MenuItem value="">
                        <em>Seleccione</em>
                      </MenuItem>
                      <MenuItem value={10}>Cliente 1</MenuItem>
                      <MenuItem value={20}>Cliente 2</MenuItem>
                      <MenuItem value={30}>Cliente 3</MenuItem>
                    </Select>
                  </FormControl>
                </ThemeProvider>
              </div>
            </div>
          </div>
          {/**=============seccion de radio group ====================== */}
          <div className="col-xs12 col-md-6">
            <div className="form-body">
              <div className="form-group">
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Color Filtro</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                    <FormControlLabel value="female" control={<Radio />} label="Tipo gestión" />
                    <FormControlLabel value="male" control={<Radio />} label="Estado gestión" />
                    <FormControlLabel value="other" control={<Radio />} label="Etapa Gestión" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SeccionFiltro;
