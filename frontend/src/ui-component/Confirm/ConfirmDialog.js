import { Dialog, DialogContent, DialogTitle } from "@material-ui/core"
import { Button, DialogActions, DialogContentText } from "@mui/material"


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
          {contenido}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm} variant="contained" color="primary">Confirmar</Button>
        <Button onClick={handleClose} variant="contained" color="error">Cancelar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog