import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';

export default function AlertPermisos({ open, confirm, disagree }) {
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        permisos
      </Button> */}
      <Dialog open={open} onClose={disagree}>
        <DialogTitle
          sx={{
            fontSize: 50,
            color: '#2E86C1',
            backgroundColor: '#D4E6F1'
          }}
        >
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item textAlign="center">
              ¿Deseas continuar con la operación?
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent sx={{ pb: 10 }}>
          <DialogContentText></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={confirm}>
            aceptar
          </Button>
          <Button variant="contained" autoFocus onClick={disagree}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
