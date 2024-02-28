import React from 'react';
import { useConfirm } from 'material-ui-confirm';
//Material UI
import { Grid, Typography, DialogContentText } from '@mui/material';
//Icon
import { IconAlertTriangle } from '@tabler/icons';

function Confirm() {
  const confirm = useConfirm();

  return (
    <>
      {confirm({
        title: (
          <>
            <Grid>
              <IconAlertTriangle size={40} />
            </Grid>
            <Grid>
              <Typography sx={{ fontWeight: 700, fontSize: 40 }}>Confirmar Operación</Typography>
            </Grid>
          </>
        ),
        titleProps: {
          color: '#36a9e1',
          backgroundColor: '#D4E6F1',
          textAlign: ' center'
        },
        description: (
          <DialogContentText
            sx={{
              color: '#6a6c6f',
              fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
              fontSize: '20px',
              fontWeight: 700
            }}
          >
            Esta acción es permanente,¿Deseas continuar?
          </DialogContentText>
        ),
        contentProps: {
          sx: {
            textAlign: 'center',
            mt: 6,
            mb: 4
          }
        },
        confirmationText: 'Confirmo',
        cancellationText: 'Cancelar',
        confirmationButtonProps: { variant: 'contained', sx: { backgroundColor: '#36a9e1', fontWeight: 600 } },
        cancellationButtonProps: { variant: 'contained', sx: { backgroundColor: '#36a9e1', fontWeight: 600 } }
      })}
    </>
  );
}

export default Confirm;
