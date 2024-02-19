// assets
import { 
  IconDashboard,
  IconFileUpload,
  IconCalendarEvent,
  IconBrandAirtable,
  IconBrandCodepen,
  IconCodeDots,
  IconBrandOpenSource,
  IconManualGearbox,
  IconSettings,
  IconId,
  IconUsers,
  IconUserCircle,
  IconChartDots2,
  IconVariable,
  IconStatusChange } from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconFileUpload, IconCalendarEvent, IconBrandAirtable, IconBrandCodepen, IconCodeDots, IconBrandOpenSource, IconManualGearbox, IconSettings, IconId, IconUsers, IconUserCircle, IconChartDots2, IconVariable, IconStatusChange };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'OrangeFI',
  title: 'OrangeFI',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Mi inicio',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'maestro-leads',
      title: 'Maestro Leads',
      type: 'item',
      url: '/dashboard/maestro-leads',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'crear-prospecto',
      title: 'Crear Prospecto',
      type: 'item',
      url: '/dashboard/crear-prospecto',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'inteligencia-maquina',
      title: 'Inteligencia Maquina',
      type: 'item',
      url: '/dashboard/inteligencia-maquina',
      icon: icons.IconFileUpload,
      breadcrumbs: false
    },
    {
      id: 'seguimiento-humano',
      title: 'Seguimiento Humano',
      type: 'item',
      url: '/dashboard/seguimiento-humano',
      icon: icons.IconFileUpload,
      breadcrumbs: false
    },
    {
      id: 'control-ventas',
      title: 'Control Ventas',
      type: 'item',
      url: '/dashboard/control-ventas',
      icon: icons.IconFileUpload,
      breadcrumbs: false
    },
    {
      id: 'historico-clientes',
      title: 'Historico Clientes',
      type: 'item',
      url: '/dashboard/historico-clientes',
      icon: icons.IconFileUpload,
      breadcrumbs: false
    },
    {
      id: 'calendario-gestion',
      title: 'Calendario Gestión',
      type: 'item',
      url: '/dashboard/calendario-gestion',
      icon: icons.IconCalendarEvent,
      breadcrumbs: false
    },
    {
      id: 'ingreso-metas',
      title: 'Ingreso Metas',
      type: 'item',
      url: '/dashboard/ingreso-metas',
      icon: icons.IconFileUpload,
      breadcrumbs: false
    },
    {
      id: 'funnel-comercial',
      title: 'Funnel Comercial',
      type: 'item',
      url: '/dashboard/funnel-comercial',
      icon: icons.IconFileUpload,
      breadcrumbs: false
    },
    {
      id: 'integraciones-outbound',
      title: 'Integraciones Outbound',
      type: 'item',
      url: '/dashboard/integraciones-outbound',
      icon: icons.IconBrandAirtable,
      breadcrumbs: false
    },
    {
      id: 'integraciones-inbound',
      title: 'Integraciones Inbound',
      type: 'item',
      url: '/dashboard/integraciones-inbound',
      icon: icons.IconBrandCodepen,
      breadcrumbs: false
    },
    {
      id: 'administrador-script',
      title: 'Administrador Script',
      type: 'item',
      url: '/dashboard/administrador-script',
      icon: icons.IconCodeDots,
      breadcrumbs: false
    },
    {
      id: 'modulo-ia',
      title: 'Módulo IA',
      type: 'item',
      url: '/dashboard/modulo-ia',
      icon: icons.IconBrandOpenSource,
      breadcrumbs: false
    },
    {
      id: 'seguimiento-scripts',
      title: 'Seguimiento Scripts',
      type: 'item',
      url: '/dashboard/seguimiento-scripts',
      icon: icons.IconManualGearbox,
      breadcrumbs: false
    },
    {
      id: 'system-option',
      title: 'System Option',
      type: 'item',
      url: '/dashboard/system-option',
      icon: icons.IconSettings,
      breadcrumbs: false
    },
    {
      id: 'perfiles-usuario',
      title: 'Perfiles Usuario',
      type: 'item',
      url: '/dashboard/perfiles-usuario',
      icon: icons.IconId,
      breadcrumbs: false
    },
    {
      id: 'ejecutivos',
      title: 'Ejecutivos',
      type: 'item',
      url: '/dashboard/ejecutivos',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: 'usuarios',
      title: 'Usuarios',
      type: 'item',
      url: '/dashboard/usuarios',
      icon: icons.IconUserCircle,
      breadcrumbs: false
    },
    {
      id: 'data-exit',
      title: 'Data Exit',
      type: 'item',
      url: '/dashboard/data-exit',
      icon: icons.IconChartDots2,
      breadcrumbs: false
    },
    {
      id: 'estado-ec2',
      title: 'Estado EC2',
      type: 'item',
      url: '/dashboard/estado-ec2',
      icon: icons.IconStatusChange,
      breadcrumbs: false
    },
    {
      id: 'variable-workshop',
      title: 'Variable Workshop',
      type: 'item',
      url: '/dashboard/variable-workshop',
      icon: icons.IconVariable,
      breadcrumbs: false
    },
    {
      id: 'carga-de-datos',
      title: 'Carga de Datos',
      type: 'item',
      url: '/dashboard/carga-de-datos',
      icon: icons.IconFileUpload,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
