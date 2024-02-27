import { DataGrid } from "@mui/x-data-grid"
import MainCard from "ui-component/cards/MainCard"


const ListReglas = () => {

  const columns = [
    {
      field: 'ORDEN_TUBO',
      headerName: 'Orden Tubo',
      flex: .5
    },
    {
      field: 'NOMBRE',
      headerName: 'Nombre',
      flex: 1
    },
    {
      field: 'CREADA',
      headerName: 'Creada',
      flex: 1    
    },
    {
      field: 'REGLAS',
      headerName: 'Reglas',
      flex: 1
    },
    {
      field: 'ACCIONES',
      headerName: 'Acciones',
      flex: .5
    }
  ]

  const rows = [
    {
      id: 1,
      ORDEN_TUBO: 1,
      NOMBRE: 'Regla 1',
      CREADA: 'Creada',
      REGLAS: 1
    }
  ]

  return (
    <MainCard title="Listado de reglas">
      <DataGrid
        columns={columns}
        rows={rows}
      />
    </MainCard>
  )
}

export default ListReglas