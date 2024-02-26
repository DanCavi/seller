import { GridActionsCellItem } from "@mui/x-data-grid";
import { IconEdit, IconLock, IconRefresh } from "@tabler/icons-react";

function getFullRut(params) {
    if (params.row.USU_DV != null && params.row.USU_RUT != null &&
        params.row.USU_RUT > 0) {
        return params.row.USU_RUT + '-' + (params.row.USU_DV == 0 ? 'K' : params.row.USU_DV)
    }
}

function getPerfil(params) {
  return params.row.PERFIL.PER_NOMBRE
}

function getEstado(params) {
  return params.row.USERESTADO.USUARIO_ESTADO_NOMBRE
}

export const columns = [
  {
    field: 'USU_USUARIO',
    headerName: 'Usuario',
    flex: 1
  },
  {
    field: 'USU_NOMBRE',
    headerName: 'Nombre',
    flex: 1
  },
  {
    field: 'USU_APELLIDO',
    headerName: 'Apellido',
    flex: 1
  },
  {
    field: 'USU_RUT_DV',
    headerName: 'DNI',
    flex: 1,
    valueGetter: getFullRut
  },
  {
    field: 'USUARIO_PERFIL_NOMBRE',
    headerName: 'Perfil',
    flex: 1,
    valueGetter: getPerfil
  },
  {
    field: 'USUARIO_ESTADO_NOMBRE',
    headerName: 'Estado',
    flex: 1,
    valueGetter: getEstado
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Acciones',
    flex: 1,
    getActions: () => [
      <GridActionsCellItem
        key={`action-${1}`}
        icon={<IconEdit />}
        label="Editar"

      />,
      <GridActionsCellItem
        key={`action-${2}`}
        icon={<IconRefresh />}
        label="Reestablecer contraseña"
      />,
      <GridActionsCellItem
        key={`action-${3}`}
        icon={<IconLock />}
        label="Bloquear"
      />
    ]
  }
];
