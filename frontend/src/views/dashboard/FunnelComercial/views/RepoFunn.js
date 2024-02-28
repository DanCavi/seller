import { Button, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { IconDeviceFloppy } from "@tabler/icons-react"
import MainCard from "ui-component/cards/MainCard"
import SelectStandar from 'ui-component/Select/Select';

const RepoFunn = () => {
  console.log("llegué al repoFunn")
  return (
    <MainCard title="Repositorio de Funnel Comercial">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" size="small" startIcon={<IconDeviceFloppy />}>
            Guardar regla
          </Button>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>País</InputLabel>
          <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Tipo</InputLabel>
          <SelectStandar datos={["hola"]} value={'3'} onChange={() => {}}/>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Nombre</InputLabel>
          <TextField size="small" fullWidth />
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default RepoFunn