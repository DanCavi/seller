import { Button, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { IconPlus } from "@tabler/icons-react"
import { columns, rows } from "./utils/utils"
import MainCard from "ui-component/cards/MainCard"

const RepoWhats = () => {
  return (
    <MainCard title="Repositorio de Motor Whatsapp">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <InputLabel>Nombre</InputLabel>
          <TextField size="small" fullWidth />
        </Grid>
        <Grid item xs={3}>
          <InputLabel>Codigo</InputLabel>
          <TextField size="small" fullWidth />
        </Grid>
        <Grid item xs={3}>
          <InputLabel>Telefono</InputLabel>
          <Select size="small" fullWidth>
            <MenuItem>+123445678</MenuItem>
            <MenuItem>+123445678</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3} sx={{ mt: 2.4 }}>
        <Button variant="contained"   fullWidth startIcon={<IconPlus />}>Agregar grupo</Button>
        </Grid>
      <Grid item xs={12}>
        <DataGrid
          columns={columns}
          rows={rows}
        />
      </Grid>
      </Grid>
    </MainCard>
  )
}

export default RepoWhats