import { Button, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { IconDeviceFloppy } from "@tabler/icons-react"
import MainCard from "ui-component/cards/MainCard"

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
          <Select size="small" fullWidth>
            <MenuItem>Internacional</MenuItem>
            <MenuItem>Chile</MenuItem>
            <MenuItem>USA</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Tipo</InputLabel>
          <Select size="small" fullWidth>
            <MenuItem>Natural</MenuItem>
            <MenuItem>Juridico</MenuItem>
          </Select>
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