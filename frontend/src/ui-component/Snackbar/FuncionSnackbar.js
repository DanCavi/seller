import { Snackbar, Alert } from '@mui/material';


const FuncionSnackbar = ( message, severity ) => {
  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
    >
      <Alert
        severity={severity}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default FuncionSnackbar