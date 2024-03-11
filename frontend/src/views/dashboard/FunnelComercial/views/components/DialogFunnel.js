import axios from 'axios';
import { useState, useEffect } from 'react';
import url from 'baseUrl';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, InputLabel } from '@mui/material';
import Input from 'ui-component/Input/Input';

const urlModulo = '/usuarios';
const URIGETCOLUMNS = `${url.BASE_URL}${urlModulo}/columns`;
const URIEDITUSER = `${url.BASE_URL}${urlModulo}`;

function DialogFunnel({ editOpen, setEditOpen, rowData, processRowUpdate }) {
  const [list, setList] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setEditOpen(false);
  }
  
  useEffect(() => {
    axios
    .get(URIGETCOLUMNS)
    .then ((response) => {
      setList(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);
  
  if (!rowData) return null;
  return (
    <>
      <Dialog
        open={editOpen}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            axios
              .patch(URIEDITUSER+'/'+rowData.usuario_id, formJson)
              .then((response) => {
                if (response.data.length) {
                  setAlertOpen(true);
                  setMessage(response.data[0].message);
                } else {
                  processRowUpdate(response.data);
                  handleClose();
                }
                
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }}
      >
        <DialogTitle variant="h3">Editar Usuario</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid container item xs={12} spacing={2}>
              {list.map((item) => (
                
                <Grid item xs={6} key={item.toLowerCase()}>
                  
                  <InputLabel>{item === 'Rut' ? 'Rut (12345678-9)' : item}</InputLabel>
                  <Input 
                    name={item.toLowerCase()} 
                    defaultValue={
                      item === 'Rut' ? rowData[item.toLowerCase()] + '-' + rowData['digito_verificador'] : rowData[item.toLowerCase()]
                    }
                    
                    
                  />
                </Grid>

              ))}
            </Grid>
            <Grid item xs={12}>
              <Alert severity="error" sx={{ display: alertOpen ? 'flex' : 'none' }}>
                {message}
              </Alert>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => handleClose()}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogFunnel;