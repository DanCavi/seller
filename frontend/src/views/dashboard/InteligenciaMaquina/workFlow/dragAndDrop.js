import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Divider, Grid } from '@mui/material';
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  useReactFlow,
  ReactFlowProvider,
  applyNodeChanges
} from 'reactflow';
import 'reactflow/dist/style.css';

// import Sidebar from './sideBar';
import './index.css';

//Import Nodes
import InputNode from './inputNode';
import OutPutNode from './outPutNode';
import Listening from './listening/listeningNode';
import WaitNode from './esperar/waitNode';
import SemanticoNode from './semantico/semanticoNode';
import CutNode from './filtrar/filterNode';
import ScriptNode from './script/scriptNode';
import EjecutarWebServiceNode from './actions/actionEjecutarWebServiceNode';
import AccionDerivarEjecutivoNode from './actions/actionDerivarEjecutivoNode';
import ConditionIf from './condiciones/if';
import ConditionElse from './condiciones/else';
import ConditionElseIf from './condiciones/elseIf';
import ConditionFor from './condiciones/for';
import CanalTelefonico from './canales/telefonico';
import CanalCorreo from './canales/correo';
import CanalWhatsapp from './canales/whatsapp';
import CanalSms from './canales/sms';
import Responder from './actions/responder';

//Import SideBar AddNodes
import SideBarNodos from './sideBarNodos/sideBarNodos';

//Import Sidebar Operadores
import SideBarOperadores from './sideBarOperadores/sideBarOperadoresNode';

//IMPORTAR COMPONENTES PANEL
import NuevoArbol from './componentesPanel/nuevoArbol';
import PanelGuardarArbol from './componentesPanel/guardarArbol';

//IMPORTAR ALERTS

//IMPORTAR AXIOS
import axios from 'axios';
//DAYJS
import dayjs from 'dayjs';
import PanelDeEdicion from './componentesPanel/guardarCambiosEdits';
//IMPORTAR URL BASE
// import url from 'baseUrl';
// import { AuthContext } from 'AuthContext';

//const id_usuario = 2;
//type Nodes
const nodeTypes = {
  listening: Listening,
  inputNode: InputNode,
  outPutNode: OutPutNode,
  esperar: WaitNode,
  semantico: SemanticoNode,
  filtrar: CutNode,
  script: ScriptNode,
  ejecutarWebService: EjecutarWebServiceNode,
  derivarEjecutivo: AccionDerivarEjecutivoNode,
  if: ConditionIf,
  else: ConditionElse,
  elseIf: ConditionElseIf,
  for: ConditionFor,
  correo: CanalCorreo,
  whatsapp: CanalWhatsapp,
  sms: CanalSms,
  telefonico: CanalTelefonico,
  responder: Responder
};

let id = 0;
const getId = () => `dndnode_${id++}`;
const DnDFlow = ({ editOn, setEditionActive }) => {
  // const { idUser } = useContext(AuthContext);

  //declaracion de  URI peticiones al backend
  const URISAVEFLOW = '/dashboard/inteligencia/save/flow';
  const URIEDITFLOW = '/dashboard/inteligencia/edit-flow/';

  //Constante para titulo
  const tituloKey = 'titulo';

  //seteo fecha Actual
  const [fechaActual, setFechaActual] = useState(null);
  useEffect(() => {
    const fechaHoraActual = new Date();
    const fecha = dayjs(fechaHoraActual);
    const fechaFormateada = fecha.format('YYYY-MM-DD HH:mm:ss');
    setFechaActual(fechaFormateada);
  }, []);

  console.log('fecha days :', fechaActual);
  const reactFlowWrapper = useRef(null);

  //ESTADOS PARA INPUTS
  const [nombreArbol, setNombreArbol] = useState('');
  const handleNombreArbol = (nombreArbol) => {
    setNombreArbol(nombreArbol);
  };

  //FUNCION ONCLICK PARA OBTENER NOMBRE ARBOL
  const [flowKeys, setFlowKeys] = useState('');
  console.log('nombrearbol estado :', typeof nombreArbol);
  console.log('flowkey estado :', flowKeys);

  //Funcion guardar nuevo titulo en localStorage:
  console.log('nombre arbol estado', nombreArbol);
  function handleEditNombre() {
    const editTitle = 'editTitle';
    const tituloHandleEdit = { titulo: nombreArbol };
    const tituloToSendStorage = JSON.stringify(tituloHandleEdit);
    localStorage.setItem(editTitle, tituloToSendStorage);
    setNombreArbol('');
  }

  //Funcion para guardar el titulo para el save en localStorage
  function hanleSaveTitleOnStorage() {
    const saveTitle = 'saveTitle';
    const tituloSaveHandle = { titulo: nombreArbol };
    const tituloToSendSaveStorage = JSON.stringify(tituloSaveHandle);
    localStorage.setItem(saveTitle, tituloToSendSaveStorage);

    setNombreArbol('');
  }
  //Fin de funcion para save title local Storage
  // Constante FlowKey que guarda los datos del Arbol guardado.

  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  // INICIO DE ESTADOS PARA USAR SAVE Y USAR RESTORE
  // const [rfInstance, setRfInstance] = useState(null);
  const { setViewport } = useReactFlow();
  //FIN DE ESTADOS PARA USAR SAVE AND RESTORE

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  ///////////////////////////// CAMBIOS EN NODOS //////////////////////////////////
  const onNodesChange = React.useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);

  console.log('setNodes :', nodes);

  ////////////////////////////////// FUNCION PARA EL SAVE ///////////////////////////
  const onSave = useCallback(
    async (e) => {
      if (reactFlowInstance) {
        if (idUser != '') {
          const flow = reactFlowInstance.toObject();
          localStorage.setItem(flowKeys, JSON.stringify(flow)); //linea para guardar en localstorage
          //sacar el titulo del storage
          const saveTitle = 'saveTitle';
          const tituloGetStorage = localStorage.getItem(saveTitle);
          const tituloJSON = JSON.parse(tituloGetStorage);
          const jsonFlow = JSON.stringify(flow);
          console.log('FLOW COMPONENTES :', flow);
          console.log('JSON FLOW', jsonFlow);
          /*Funcion para fragmentar el array flow */
          const { nodes: flowNodos, viewport: flowViewport, edges: flowEdges } = flow;
          const fechaDeHoy = fechaActual;
          console.log('nodes : ', nodes);
          console.log('fecha con dayjs :', fechaDeHoy);
          console.log('titulo en save :', tituloJSON);

          const viewportToSend = {
            x: flowViewport.x,
            y: flowViewport.y,
            zoom: flowViewport.zoom,
            titulo: tituloJSON.titulo,
            fecha_creacion: fechaDeHoy,
            id_usuario: idUser
          };

          console.log('FlowKey', flowKeys);
          console.log('titulo :', viewportToSend.titulo);
          //pasar los datos de edges
          const edgesToSend = flowEdges.map((edge) => ({
            id_edge: edge.id,
            source: edge.source,
            target: edge.target,
            target_handle: edge.targetHandle,
            source_handle: edge.sourceHandle
          }));

          //transforma los nodos al formato para enviar al servidor
          const nodosToSend = flowNodos.map((nodo) => ({
            width: nodo.width,
            height: nodo.height,
            id_nodo: nodo.id,
            type: nodo.type,
            positionX: nodo.position.x,
            positionY: nodo.position.y,
            positionAbsoluteX: nodo.positionAbsolute.x,
            positionAbsoluteY: nodo.positionAbsolute.y,
            inputValue: nodo.data.inputValue,
            opcion: nodo.data.opcion,
            operador: nodo.data.operador
          }));
          const dataToSend = {
            nodos: nodosToSend,
            viewport: viewportToSend,
            edges: edgesToSend
          };

          console.log('nodos :', dataToSend.nodos, 'viewport', dataToSend.viewport, 'edges :', dataToSend.edges, 'id_usuario :', idUser);
          e.preventDefault();
          axios
            .post(`${url.BASE_URL}${URISAVEFLOW}`, dataToSend)
            .then((response) => {
              console.log({
                message: 'Registro exitoso',
                'response data': response.data,
                status: 200
              });
            })
            .catch((error) => {
              console.log({
                message: 'Error al enviar datos',
                Error: error,
                status: 405
              });
            });
          localStorage.clear();
        }
      }
    },
    [reactFlowInstance]
  );

  ///////////////////////////FIN FUNCIONES SAVE/////////////////////////////////////

  ////////////////////////// FUNCION PARA RESTOR WORKFLOW ///////////////////////////////////////
  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const keyForStorage = 'dataFlow';
      const flowJson = localStorage.getItem(keyForStorage);
      const flowById = JSON.parse(flowJson);
      //FUNCION PARA TRAER DATOS DE UN FLOW BY ID DEL COMPONENTE TABLA Y PASARLOS A UN ESTADO

      //console.log('f', flowById);
      console.log('titulo onrestore :', flowById.flow.titulo);
      console.log('nodos flow ', flowById.nodos);
      //FIN DE FUNCINO PARA TRAER DATOS DEL COMPONENTE TABLA

      if (flowById) {
        const tituloObjetc = { titulo: flowById.flow.titulo };
        const tituloJSON = JSON.stringify(tituloObjetc);
        console.log('titulo on restore JSON :', tituloJSON);
        localStorage.setItem(tituloKey, tituloJSON);
        setNombreArbol(flowById.flow.titulo);
        setFlowKeys(flowById.flow.titulo);
        const { x = 0, y = 0, zoom = 1 } = { x: 0, y: 0, zoom: 1 };
        setNodes(flowById.nodos || []);
        setEdges(flowById.edges || []);
        setViewport({ x, y, zoom });
      }
      //type button para cada nodo=======================================================================

      // flow.nodes.forEach((node) => {
      //   const buttonTypeKey = `buttonType_${node.id}`;
      //   const buttonTypeData = localStorage.getItem(buttonTypeKey);
      //   //console.log('que trae buttontypedata en restore :', buttonTypeData);
      //   if (buttonTypeData) {
      //     //let type;
      //     //let value;

      //     try {
      //       const parsedData = JSON.parse(buttonTypeData);
      //       //console.log('que trae JSON parseData :', parsedData);
      //       const type = parsedData;

      //       //console.log('que trae el parse type para el node:', type);
      //       // console.log('que trae parsed value para el node: ', value);
      //       updateNodeContent(type);
      //     } catch (error) {
      //       console.error('error parsing buttontypedata', buttonTypeData);
      //     }
      //   }
      // });
      //fin type button
      //}
    };

    restoreFlow();
  }, [setNodes, setViewport]);
  ////////////////////////// FIN FUNCION PARA RESTOR WORKFLOW ///////////////////////////////////////

  ///////////////////////// FUNCION PARA EDITAR DATOS WORKFLOW //////////////////////////////////////
  const onEdit = useCallback(
    async (e) => {
      if (reactFlowInstance) {
        console.log('click en edit ');
        const editTitle = 'editTitle';
        //se obtiene el nombre obtenido del input
        const tituloEditStorage = localStorage.getItem(editTitle);
        const tituloEditJSON = JSON.parse(tituloEditStorage);
        console.log('titulo cambiado con boton guardar :', tituloEditJSON);
        //se obtiene de Storage el titulo traido de la base de datos
        const tituloStorage = localStorage.getItem(tituloKey);
        const tituloFlow = JSON.parse(tituloStorage);
        console.log('tituloFlow :', tituloFlow);
        //rescatar el Id
        const dataFlow = 'dataFlow';
        const getIdFlow = localStorage.getItem(dataFlow);
        const idFlow = JSON.parse(getIdFlow);
        console.log('get id flow :', idFlow);
        //fin rescatar id

        //Guardar en local storage para posterior recuperación y guardado
        const editsaveKey = 'editSave';
        const dataNow = reactFlowInstance.toObject();
        localStorage.setItem(editsaveKey, JSON.stringify(dataNow));
        //Fin de guardado en local storage

        //Recuperar el flujo que viene desde el storage con todos los datos de DB
        const flowJson = localStorage.getItem(editsaveKey);
        const flowById = JSON.parse(flowJson);
        //se puede recuperar el flujo ya restaurado con nodos y edges viewport, pero no datos de db
        // const flow = reactFlowInstance.toObject();
        // localStorage.setItem(nombreArbol, JSON.stringify(flow));

        /*Funcion para fragmentar el array flow */
        const { nodes: flowNodos, viewport: flowViewport, edges: flowEdges } = flowById;

        console.log('datos totales :', flowById);
        console.log('nodos :', flowNodos);
        console.log('viewport :', flowViewport);
        console.log('edges :', flowEdges);
        console.log('flowData :', idFlow);
        console.log('fecha Actual : ', fechaActual);

        const titulo = tituloEditJSON === null ? tituloFlow : tituloEditJSON;
        console.log('comprobacion del titulo en edit,:', titulo.titulo);
        const viewportToSend = {
          x: flowViewport.x,
          y: flowViewport.y,
          zoom: flowViewport.zoom,
          titulo: titulo.titulo,
          id: idFlow.flow.id
        };
        console.log('FlowKey :', flowKeys);
        console.log('titulo :', viewportToSend.titulo);
        //pasar los datos de edges
        const edgesToSend = flowEdges.map((edge) => ({
          id_edge: edge.id,
          source: edge.source,
          target: edge.target,
          target_handle: edge.targetHandle,
          source_handle: edge.sourceHandle
        }));

        //transforma los nodos al formato para enviar al servidor
        const nodosToSend = flowNodos.map((nodo) => ({
          width: nodo.width,
          height: nodo.height,
          id_nodo: nodo.id,
          type: nodo.type,
          positionX: nodo.position.x,
          positionY: nodo.position.y,
          positionAbsoluteX: nodo.positionAbsolute.x,
          positionAbsoluteY: nodo.positionAbsolute.y,
          inputValue: nodo.data.inputValue
        }));
        const fecha_creacion = fechaActual;
        const dataToSend = {
          nodos: nodosToSend,
          viewport: viewportToSend,
          edges: edgesToSend,
          fecha_creacion: fecha_creacion
        };

        console.log(
          'nodos :',
          dataToSend.nodos,
          'viewport',
          dataToSend.viewport,
          'edges :',
          dataToSend.edges,
          'fecha actual :',
          dataToSend.fecha_creacion,
          'id to Send :',
          dataToSend.viewport.id
        );
        const id = dataToSend.viewport.id;
        e.preventDefault();
        axios
          .post(`${url.BASE_URL}${URIEDITFLOW}${id}`, dataToSend)
          .then((response) => {
            console.log({
              message: 'Registro exitoso',
              'response data': response.data,
              status: 200
            });
          })
          .catch((error) => {
            console.log({
              message: 'Error al guardar su reactFlow',
              Error: error,
              status: 405
            });
          });
        //localStorage.clear();
      }
    },
    [reactFlowInstance]
  );
  //////////////////////// FIN FUNCION PARA EDITAR DATOS WORKFLOW //////////////////////////////////
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback((event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    //console.log(type);

    // check if the dropped element is valid
    if (typeof type === 'undefined' || !type) {
      return;
    }

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top
    });

    const newNode = {
      id: getId(),
      type: type,
      position,
      data: {
        onDeleteNode: handleDeleteNode,
        inputValue: ``,
        opcion: ``,
        operador: ``
      }
    };

    setNodes((nds) => nds.concat(newNode));
    //console.log(newNode);
  }, [setNodes][reactFlowInstance]);
  //console.log(nodes);

  // //Funcion Delete
  const handleDeleteNode = (nodeId) => {
    const updatedNodes = nodes.filter((node) => node.id !== nodeId);
    //console.log('id :', updatedNodes);
    setNodes(updatedNodes);
  };
  const onNodeClick = (event, node) => {
    // Filtra los nodos para eliminar el nodo con el ID proporcionado
    //handleDeleteNode(node.id);

    // Verifica si se hizo clic en el botón de eliminar dentro del nodo
    if (
      event.target.tagName.toLowerCase() !== 'input' &&
      event.target.tagName.toLowerCase() !== 'div' &&
      event.target.tagName.toLowerCase() !== 'em' &&
      event.target.tagName.toLowerCase() !== 'fieldset' &&
      event.target.tagName.toLowerCase() !== 'option' &&
      event.target.tagName.toLowerCase() !== 'select'
    ) {
      handleDeleteNode(node.id);
    }
  };
  //Fin Funcion Delete

  //Estados y Funcion para Nuevo Arbol
  const [newWorkFlow, setNewWorkFlow] = useState(false);
  const handlerNewRowkFlow = () => {
    setNewWorkFlow(true);
  };
  //Fin estados y Funcion para Nuevo arbol
  //volver a nuevo arbol
  const handleBolberNuevoArbol = () => {
    localStorage.clear();
    setNodes([]);
    setEdges([]);
    setNewWorkFlow(false);
    setEditionActive(false);
  };
  //fin volver a nuevo arbol
  return (
    <Grid container spacing={1} direction="row" mb={2} sx={{ minHeight: '700px', overflow: 'auto' }}>
      {console.log('estado en reactflow :', editOn)}

      {/*||================== Inicio React Flow =============================|| */}
      <Grid item sm={12} md={10} xs={12} sx={{ width: '100%' }}>
        {/*||================= Side Bar Nodos =================================||*/}
        <SideBarNodos />
        {/*||==================FIN Side Bar Nodos ===============================||*/}

        <div style={{ width: '100%', height: '90%', minHeight: '100px' }} className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            style={{ height: '100%', width: '100%' }}
            nodes={nodes}
            edges={edges}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
          >
            {newWorkFlow === false && editOn === false ? (
              <NuevoArbol onClick={handlerNewRowkFlow} />
            ) : newWorkFlow === true && editOn === false ? (
              <PanelGuardarArbol
                onSave={onSave}
                nombreArbol={nombreArbol}
                handleNombreArbol={handleNombreArbol}
                handleGuardarNombreArbolClick={hanleSaveTitleOnStorage}
                nuevoArbol={handleBolberNuevoArbol}
              />
            ) : editOn === true ? (
              <PanelDeEdicion
                onEdit={onEdit}
                onClick={handleEditNombre}
                onRestore={onRestore}
                nombreArbol={nombreArbol}
                onChange={handleNombreArbol}
                nuevoArbol={handleBolberNuevoArbol}
              />
            ) : (
              ''
            )}
            {/**onRestore={onRestore} */}
            <Controls />
            <Background variant="cross" />
          </ReactFlow>
        </div>
      </Grid>
      {/*||================== FIN Inicio React Flow =============================|| */}
      <Divider sx={{ border: { xs: 'none', md: '1px solid grey' }, m: 1 }}></Divider>
      {/*||================== SideBar Operadores ============================|| */}
      <Grid item md={1} mt={{ xs: 20 }}>
        <SideBarOperadores />
      </Grid>
      {/*||================== SideBar Operadores ============================|| */}
    </Grid>
  );
};

const App = ({ editOn, setEditionActive }) => {
  console.log('app :', editOn);
  return (
    <ReactFlowProvider>
      <DnDFlow editOn={editOn} setEditionActive={setEditionActive} />
    </ReactFlowProvider>
  );
};
export default App;
