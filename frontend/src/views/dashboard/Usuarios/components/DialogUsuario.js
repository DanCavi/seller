import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, InputLabel } from "@mui/material";
import Input from 'ui-component/Input/Input';
import { useState } from "react";
import url from 'baseUrl';
import axios from 'axios';
import { useEffect } from "react";

const urlModulo = '/usuarios/columns';
const URIGETCOLUMNS = `${url.BASE_URL}${urlModulo}`;

function DialogUsuario({ open, setOpen }) {

  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(URIGETCOLUMNS)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleCLose = () => {
    setOpen(false);
  }

  

 

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
            .post(`${url.BASE_URL}/usuarios`, formJson)
            .then((response) => {
              setRows(rows => [...rows, response.data]);
            })
          handleCLose();
        },
      }}
    >
      <DialogTitle>Añadir Usuario</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid container item xs={12} spacing={2}>
          {list.map((item) => (
            <Grid item xs={6} key={item.toLowerCase()}>
              <InputLabel>{item}</InputLabel>
              <Input name={item.toLowerCase()} />
            </Grid>
          ))}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleCLose}>Cancelar</Button>
        <Button type="submit" variant="contained">Guardar</Button>
      </DialogActions>
    </Dialog>

    </div>
  )


}

export default DialogUsuario