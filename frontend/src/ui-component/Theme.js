import React from 'react';
import { Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const UIMaterialsComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ backgroundColor: 'white', border: '1px solid lightblue', borderRadius: '8px', padding: '16px', marginTop: '32px' }}>
        <CssBaseline />
        <Typography component="h1" variant="h5" sx={{ marginBottom: '16px' }}>
          Tu Título Aquí
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nombre"
            label="Nombre"
            name="nombre"
            autoComplete="nombre"
          />
          {/* Agrega más campos TextField según sea necesario */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: 'blue', color: 'white' }}
          >
            Enviar
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default UIMaterialsComponent;
