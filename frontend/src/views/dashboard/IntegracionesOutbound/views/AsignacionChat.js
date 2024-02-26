import { Button, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { IconPlus } from "@tabler/icons-react"
import MainCard from "ui-component/cards/MainCard"
import { columns, rows } from "./utils/utils"

const AsignacionChat = () => {
  

  return (
    <MainCard title="Asignación Chat">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <InputLabel>Web</InputLabel>
          <TextField fullWidth size="small" />
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Producto</InputLabel>
          <Select size="small" fullWidth>
            <MenuItem>GO911</MenuItem>
            <MenuItem>test</MenuItem>
            <MenuItem>test2</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" sx={{ mt: 2.7}} fullWidth startIcon={<IconPlus />}>Agregar integración</Button>
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




export default AsignacionChat