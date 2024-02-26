const { DataGrid } = require("@mui/x-data-grid");

const DataExit = () => {
  const columns = [
    {
      field: 'perfil',
      headerName: 'Perfil',
      flex: 1
    },
    {
      field: 'acciones',
      headerName: 'Acciones',
      flex: .6
    }
  ]

  const rows = [
    {
      id: 1,
      perfil: 'Administrador',
    }
  ]

  return (
    <DataGrid
      columns={columns}
      rows={rows}
    />
  );
}

export default DataExit