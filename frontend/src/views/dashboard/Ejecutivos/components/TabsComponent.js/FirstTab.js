import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"


const FirstTab = () => {

  const columns = [
    {
      field: 'razon_social',
      headerName: 'Razón Social',
      flex: 1
    },
    {
      field: 'rut',
      headerName: 'Dni',
      flex: 1
    },
    {
      field: 'tipo_cliente',
      headerName: 'Tipo Cliente',
      flex: 1
    },
    {
      field: 'comuna',
      headerName: 'Comuna',
      flex: 1
    }
  ]

  return (
    <Box p={4} >

      <DataGrid
        autoHeight
        columns={columns}
        rows={[]} 
        sx={{
          '--DataGrid-overlayHeight': ''
        }}
        />

        </Box>
  )
}

export default FirstTab