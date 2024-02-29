import { Dialog, DialogContent, DialogTitle } from "@material-ui/core"
import { Button, DialogActions, DialogContentText } from "@mui/material"


const ConfirmDialog = ({isOpen, handleClose}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
    >
      <DialogTitle>
        Eliminar
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Esta acción es permanente
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" color="warning">Confirmar</Button>
        <Button onClick={handleClose} variant="contained" color="error">Cancelar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog