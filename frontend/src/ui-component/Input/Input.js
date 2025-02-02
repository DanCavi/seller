import React from 'react';
// importacion de Grid y elementos
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
    borderRadius: 0
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 0,
    backgroundColor: 'white'
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important', // override inline-style,
    borderRadius: 0
  },
  '& .MuiInputBase-input': {
    borderRadius: 0
  }
});
function InputNombreVariable({ onChange, name, value, defaultValue, readOnly = false }) {
  return (
    <>
      <ValidationTextField
        defaultValue={defaultValue}
        onChange={onChange}
        name={name}
        value={value}
        //label="Ingrese Nombre"
        variant="outlined"
        id="validation-outlined-input"
        size="small"
        sx={{
          width: '100%',
          mt: 1,
          mb: 1,
        }}
        InputProps={{
          readOnly: readOnly
        }}

      />
    </>
  );
}

export default InputNombreVariable;
