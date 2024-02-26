function getFechaGestion(params) {
  if (params.row.GESTION != null) {
    return params.row.GESTION.FECHA_GESTION.slice(0, 10);
  }
  return '-';
}

function getNombre(params) {
  if (params.row.NOMBRE != null && params.row.APELLIDO != null) {
    return params.row.NOMBRE + ' ' + params.row.APELLIDO;
  }
  return 'Sin Nombre';
}

export const columns = [
  {
    field: 'ejecutivo',
    headerName: 'Ejecutivo',
    flex: 1
  },
  {
    field: 'NOMBRE',
    headerName: 'Cliente',
    flex: 1,
    valueGetter: getNombre
  },
  {
    field: 'TELEFONO',
    headerName: 'Contacto',
    flex: 1
  },
  {
    field: 'GESTION',
    headerName: 'Fecha Gestion',
    flex: 1,
    valueGetter: getFechaGestion
  },
  {
    field: 'producto',
    headerName: 'Producto',
    flex: 1
  },
  {
    field: 'tipo_gestion',
    headerName: 'Tipo Gestión',
    flex: 1
  },
  {
    field: 'estado_negocio',
    headerName: 'Estado Negocio',
    flex: 1
  },
  {
    field: 'canal_de_salida',
    headerName: 'Canal de Salida',
    flex: 1
  },
  {
    field: 'prioridad',
    headerName: 'Prioridad',
    flex: 1
  },
  {
    field: 'cierre',
    headerName: 'Cierre',
    flex: 1
  }
];
