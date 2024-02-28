import React from 'react';
// importacion de elementos Materials
import { FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import PropTypes from 'prop-types';

function InputCustom({ name, size, label, value, onChange, variant, desactivar, type, id, icon, onClick, ...otherStyles }) {
  return (
    <>
      <FormControl size="small" variant={variant} sx={{ width: '100%', ...otherStyles }}>
        <InputLabel>{label}</InputLabel>
        <Input
          multiline
          rows={3}
          type={type}
          disabled={desactivar}
          name={name}
          value={value}
          onChange={onChange}
          id={id}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={onClick}>{icon}</IconButton>
            </InputAdornment>
          }
          size={size}
          sx={{ p: 1, width: '100%', wordWrap: 'break-word', ...otherStyles }}
        />
      </FormControl>
    </>
  );
}
Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  variant: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  positionIcon: PropTypes.string
};

Input.defaultPros = {
  label: '',
  variant: 'outlined',
  positionIcon: 'end',
  size: 'small'
};
export default InputCustom;
