import { Dialog, DialogContent, DialogTitle } from "@material-ui/core"
import { Button, DialogActions, DialogContentText } from "@mui/material"


const ConfirmDialog = ({isOpen, handleClose, handleDeleteClick}) => {
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
        <Button onClick={handleDeleteClick} variant="contained" color="error">Confirmar</Button>
        <Button onClick={handleClose} variant="contained" color="primary">Cancelar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog