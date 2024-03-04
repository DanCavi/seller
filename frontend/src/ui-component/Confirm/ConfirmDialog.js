import { Dialog, DialogContent, DialogTitle } from "@material-ui/core"
import { Button, DialogActions, DialogContentText } from "@mui/material"


const ConfirmDialog = ({isOpen, handleClose, handleDeleteClick}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries);
          console.log(formJson);
        }
      }}
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
        <Button onClick={handleDeleteClick} variant="contained" type="submit" color="error">Confirmar</Button>
        <Button onClick={handleClose} variant="contained" color="primary">Cancelar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog