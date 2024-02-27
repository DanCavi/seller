import { DataGrid } from "@mui/x-data-grid";


const GridMetas = () => {
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  const rows = [
    {
      id: 1,
      EJECUTIVO: 'Ejecutivo 1',
      ENERO: 2000
    }
  ]

  const columns = [
    {
      field: 'EJECUTIVO',
      headerName: 'Ejecutivo',
      width: 200
    },
    ...meses.map((mes) => ({
      field: mes.toUpperCase(),
      headerName: mes,
      width: 100,
      filterable: false,
      editable: true,
      type: 'number',
      
    }))
    

  ]

  return (
    <DataGrid
      columns={columns}
      rows={rows}
    />
  );
}

export default GridMetas