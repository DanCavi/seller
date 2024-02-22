import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashboardMaestroLeads = Loadable(lazy(() => import('views/dashboard/MaestroLeads')));
const DashboardAdministradorScript = Loadable(lazy(() => import('views/dashboard/AdministradorScript')));
const DashboardCalendarioGestion = Loadable(lazy(() => import('views/dashboard/CalendarioGestion')));
const DashboardCargaDeDatos = Loadable(lazy(() => import('views/dashboard/CargaDeDatos')));
const DashboardControlVentas = Loadable(lazy(() => import('views/dashboard/ControlVentas')));
const DashboardCrearProspecto = Loadable(lazy(() => import('views/dashboard/CrearProspecto')));
const DashboardDataExit = Loadable(lazy(() => import('views/dashboard/DataExit')));
const DashboardEjecutivos = Loadable(lazy(() => import('views/dashboard/Ejecutivos')));
const DashboardEstadoEC2 = Loadable(lazy(() => import('views/dashboard/EstadoEC2')));
const DashboardFunnelComercial = Loadable(lazy(() => import('views/dashboard/FunnelComercial')));
const DashboardHistoricoClientes = Loadable(lazy(() => import('views/dashboard/HistoricoClientes')));
const DashboardIngresoMetas = Loadable(lazy(() => import('views/dashboard/IngresoMetas')));
const DashboardIntegracionesInbound = Loadable(lazy(() => import('views/dashboard/IntegracionesInbound')));
const DashboardIntegracionesOutbound = Loadable(lazy(() => import('views/dashboard/IntegracionesOutbound')));
const DashboardInteligenciaMaquina = Loadable(lazy(() => import('views/dashboard/InteligenciaMaquina')));
const DashboardModuloIa = Loadable(lazy(() => import('views/dashboard/ModuloIa')));
const DashboardPerfilesUsuario = Loadable(lazy(() => import('views/dashboard/PerfilesUsuario')));
const DashboardSeguimientoHumano = Loadable(lazy(() => import('views/dashboard/SeguimientoHumano')));
const DashboardSeguimientoScripts = Loadable(lazy(() => import('views/dashboard/SeguimientoScripts')));
const DashboardSystemOption = Loadable(lazy(() => import('views/dashboard/SystemOption')));
const DashboardUsuarios = Loadable(lazy(() => import('views/dashboard/Usuarios')));
const DashboardVariableWorkshop = Loadable(lazy(() => import('views/dashboard/VariableWorkshop')));



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        },
        {
          path: 'maestro-leads',
          element: <DashboardMaestroLeads />
        },
        {
          path: 'administrador-script',
          element: <DashboardAdministradorScript />
        },
        {
          path: 'calendario-gestion',
          element: <DashboardCalendarioGestion />
        },
        {
          path: 'carga-de-datos',
          element: <DashboardCargaDeDatos />
        },
        {
          path: 'control-ventas',
          element: <DashboardControlVentas />
        },
        {
          path: 'crear-prospecto',
          element: <DashboardCrearProspecto />
        },
        {
          path: 'data-exit',
          element: <DashboardDataExit />
        },
        {
          path: 'ejecutivos',
          element: <DashboardEjecutivos />,
          chilndren: [
            {
              path: '{}',
              element: <DashboardEjecutivos />
            }
          ]
        },
        {
          path: 'estado-ec2',
          element: <DashboardEstadoEC2 />
        },
        {
          path: 'funnel-comercial',
          element: <DashboardFunnelComercial />
        },
        {
          path: 'historico-clientes',
          element: <DashboardHistoricoClientes />
        },
        {
          path: 'ingreso-metas',
          element: <DashboardIngresoMetas />
        },
        {
          path: 'integraciones-inbound',
          element: <DashboardIntegracionesInbound />
        },
        {
          path: 'integraciones-outbound',
          element: <DashboardIntegracionesOutbound />
        },
        {
          path: 'inteligencia-maquina',
          element: <DashboardInteligenciaMaquina />
        },
        {
          path: 'modulo-ia',
          element: <DashboardModuloIa />
        },
        {
          path: 'perfiles-usuario',
          element: <DashboardPerfilesUsuario />
        },
        {
          path: 'seguimiento-humano',
          element: <DashboardSeguimientoHumano />
        },
        {
          path: 'seguimiento-scripts',
          element: <DashboardSeguimientoScripts />
        },
        {
          path: 'system-option',
          element: <DashboardSystemOption />
        },
        {
          path: 'usuarios',
          element: <DashboardUsuarios />
        },
        {
          path: 'variable-workshop',
          element: <DashboardVariableWorkshop />
        }
      ]
    },
  ]
};

export default MainRoutes;
