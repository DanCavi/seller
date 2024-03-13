import { Stack } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

const ThirdTab = () => {

  const columns = [
    {
      field: 'unidad_negocio',
      headerName: 'Unidad de Negocio',
      flex: 1
    },
    {
      field: 'producto',
      headerName: 'Producto',
      flex: 1
    },
    {
      field: 'actions',
      headerName: 'Activar',
      flex: .4
    }
  ]

  return (
    <Stack p={4}>
      <DataGrid
        autoHeight
        rows={[]}
        columns={columns}
      />
      
    </Stack>
  )
}

export default ThirdTab