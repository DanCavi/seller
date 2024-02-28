import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Typography } from '@mui/material';
//Import Theme
import { useTheme } from '@mui/material';

//Import ICON
import { IconExclamationCircle } from '@tabler/icons';

export default function AlertError({ open, handleClose }) {
  const handleCloseDialog = () => {
    handleClose();
  };

  const theme = useTheme();
  return (
    <div>
      <Dialog open={open} onClose={handleCloseDialog} fullWidth>
        <DialogTitle
          sx={{
            backgroundColor: '#F27474',
            borderColor: '#EC7063',
            color: '#922B21'
          }}
        >
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={12} textAlign="center">
              <IconExclamationCircle size={100} />
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item md={12} textAlign="center">
              <Typography sx={{ color: '#922B21', fontSize: 50 }}>Error!</Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid container direction="row" justify="center" sx={{ pt: 5 }}>
              <Grid item md={12} textAlign="center">
                <Typography sx={{ fontSize: 20, color: `${theme.palette.grey[500]}`, fontFamily: 'sans-serif' }}>
                  Hubo un error al realizar tu operación
                </Typography>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleCloseDialog} autoFocus variant="contained">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
