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
import { IconCircleCheck } from '@tabler/icons';

export default function AlertSucces({ open, handleClose }) {
  console.log('estado open:', open);

  const handleCloseDialog = () => {
    handleClose();
  };
  const theme = useTheme();
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button> */}
      <Dialog open={open} onClose={handleCloseDialog} fullWidth>
        <DialogTitle
          sx={{
            backgroundColor: '#dff0d8',
            borderColor: '#d6e9c6',
            color: '#3c763d',
            fontSize: 50
          }}
        >
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={12} textAlign="center">
              <IconCircleCheck size={100} />
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item md={12} textAlign="center">
              Success!
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid container direction="row" justify="center" sx={{ pt: 5 }}>
              <Grid item md={12} textAlign="center">
                <Typography sx={{ fontSize: 20, color: `${theme.palette.grey[500]}`, fontFamily: 'sans-serif' }}>
                  Tu operación se realizo con éxito
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
