import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, InputLabel } from '@mui/material';
import Input from 'ui-component/Input/Input';
import { useState } from 'react';
import url from 'baseUrl';
import axios from 'axios';
import { useEffect } from 'react';
import SelectStandar from 'ui-component/Select/Select';

const urlModulo = '/usuarios';
const URIGETCOLUMNS = `${url.BASE_URL}${urlModulo}/columns`;
const URIGETUSERS = `${url.BASE_URL}${urlModulo}`;

function DialogUsuario({ open, setOpen, setRows }) {
  const [list, setList] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get(URIGETCOLUMNS)
      .then((response) => {
        console.log(response.data);
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClose = () => {
    setOpen(false);
    setAlertOpen(false);
    setMessage('');
  };

  return (
    <div>
      <Dialog
        open={open}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            axios
              .post(URIGETUSERS, formJson)
              .then((response) => {
                if (response.data.length) {
                  setAlertOpen(true);
                  setMessage(response.data[0].message);
                } else {
                  setRows((rows) => [...rows, response.data]);
                  handleClose();
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }}
      >
        <DialogTitle variant="h3">Añadir Usuario</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid container item xs={12} spacing={2}>
              {list.map((item) => (
                <Grid item xs={6} key={item}>
                  {Array.isArray(item) 
                    ? (
                      <>
                      <InputLabel>{'Perfil'}</InputLabel>
                      <SelectStandar datos={item} value={''} onChange={(e) => {e}}/>
                      </>
                    ) 
                    : (
                      <>
                      <InputLabel>{item === 'Rut' ? 'Rut (12345678-9)' : item}</InputLabel>
                      <Input name={item.toLowerCase()} /> 
                      </>                    
                    )
                  }
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
          <Button variant="contained" onClick={handleClose}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogUsuario;
