import React, { useState } from 'react';
// importacion de Grid y elementos

import { MenuItem, Select, FormControl, ThemeProvider, createTheme } from '@mui/material';
import { propTypes } from 'react-bootstrap/esm/Image';

const theme = createTheme({
  components: {
    // Name of the component
    MuiFormControl: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 0,
          fontSize: '10px'
        }
      }
    }
  }
});

// const variablesCreadas = [''];

function MultiSelect({ options, onChange, placeholder, ...props }) {
  // == estados Iniciales == //
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (e) => {
    const selected = e.target.value;
    setSelectedValues(selected);
    if (onChange) {
      onChange(selected);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 0, minWidth: '100%', backgroundColor: '#FAFAFA' }} size="small" {...props}>
          {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
          <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={selectedValues} onChange={handleChange} size="small">
            <MenuItem value="">
              <em style={{ color: '#9E9E9E' }}> {placeholder || 'Seleccione'} </em>
            </MenuItem>
            {options.map((variable, index) => (
              <MenuItem key={index} value={variable}>
                {variable}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </>
  );
}

MultiSelect.propTypes = {
  variables: propTypes.array,
  onChange: propTypes.func
};

export default MultiSelect;
