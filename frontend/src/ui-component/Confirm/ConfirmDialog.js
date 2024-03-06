import { Dialog, DialogContent, DialogTitle } from "@material-ui/core"
import { Button, DialogActions, DialogContentText, Grid } from "@mui/material"
import { IconAlertTriangle } from "@tabler/icons-react"


const ConfirmDialog = ({ setIsConfirmed, action, isOpen, handleClose, titulo, contenido}) => {

  const handleConfirm = () => {
    setIsConfirmed({action: action})
    handleClose()
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
    >
      <DialogTitle>
        {titulo}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconAlertTriangle color="red" size={80} />
            </Grid>
            <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {contenido}
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm} variant="contained" color="error">Confirmar</Button>
        <Button onClick={handleClose} variant="contained" color="primary">Cancelar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog