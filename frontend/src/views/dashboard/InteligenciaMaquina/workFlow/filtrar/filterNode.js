import React, { useState, useEffect } from 'react';
import { Button, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import {
  Handle,
  //NodeProps,
  Position
  //useReactFlow
} from 'reactflow';
//Icon
import { IconCircleX, IconFilter, IconBox, IconBoxOff, IconEqualNot, IconEqual, IconMathLower, IconMathGreater } from '@tabler/icons';
//import Operador standarNode
import OperadorStandarNode from '../operadores/operadorStandarNode';
//theme
import { useTheme } from '@mui/material';

const Cut = ({ isConnectable, id, data }) => {
  //=======================|| Funcion para cambios en el input ||===============================//
  const [operador, setOperador] = useState({});
  //Estados para campos dentro del input
  const [opcion, setOpcion] = useState('');
  //const [input, setInput] = useState('');

  const onChange = React.useCallback((evt) => {
    //setInput(evt.target.value);
    console.log(evt.target.value);
    data.inputValue = evt.target.value;
    console.log('data . input :', data.inputValue);
  }, []);

  const handleOption = React.useCallback((e) => {
    setOpcion(e.target.value);
    data.opcion = e.target.value;
    console.log('data.opcion :', data.opcion);
  }, []);
  //=======================|| Fin Funcion cambios input ||=======================================//
  //Funcion Delete Node
  const onDeleteNode = data?.onDeleteNode; // Obtener onDeleteNode de los datos
  // const onNodeDataChange = data?.onNodeDataChange; //obtener la funcion onNodeChange
  const handleNodeDelete = () => {
    if (onDeleteNode) {
      onDeleteNode(id);
    }
  };
  //Fin Funcion DELETE NODE

  const options = ['Estado', 'DeudaMaxima', 'DeudasTotales', 'AcumulaciónDeudas'];

  // == estados Iniciales == //

  const theme = useTheme();
  const [nodeContent, setNodeContent] = useState(null); //estado contenido nodo
  const [buttonType, setButtonType] = useState('');
  const [dragNode, setDragNode] = React.useState(data?.dragNode || '');
  console.log('nodo insertado :', dragNode);

  //Funcion para guardar id y type en localStorage
  useEffect(() => {
    if (buttonType) {
      localStorage.setItem(`buttonType`, `${buttonType} ${id}`);
    }
  }, [buttonType, id]);

  //FUNCION PARA GUARDAR EN SOTORAGE BOTON MAs id
  useEffect(() => {
    const savedButtonType = localStorage.getItem(`buttonType`);
    if (savedButtonType) {
      setButtonType(savedButtonType);
      updateNodeContent(savedButtonType);
    }
  }, [id]);

  const onDrop = (event) => {
    const droppedButtonType = event.dataTransfer.getData('text/plain');
    setButtonType(droppedButtonType);
    updateNodeContent(droppedButtonType);

    //guardar el tipo de boton con el id del nodo
    const buttonTypeKey = `buttonType_${id}`;
    const buttonTypeData = JSON.stringify({ id, type: droppedButtonType });
    localStorage.setItem(buttonTypeKey, buttonTypeData);

    setOperador({ [buttonTypeKey]: buttonTypeData });
    data.operador = droppedButtonType;
    //const buttonType = event.dataTransfer.getData('text/plain');
    // Si es un botón, puedes crear un botón dentro del nodo aquí.
    console.log('tipo de boton: ', droppedButtonType);
    <Button sx={{ cursor: 'grab', width: '100%' }}>boton3 </Button>;

    //Prueba codigo para almacenar un input

    //Fin prueba codigo almacena input
  };
  console.log('data.operador :', operador);
  const updateNodeContent = (type) => {
    if (type.accion === 'mayor' || type === 'mayor') {
      // Crea y coloca el botón dentro del nodo.
      setNodeContent(<OperadorStandarNode titulo={<IconMathGreater />} toolTip="Mayor" backgroundColor="#FF9217" />);
      setDragNode('mayor');
    } else if (type.accion === 'menor' || type === 'menor') {
      // Crea y coloca el botón dentro del nodo.
      setNodeContent(<OperadorStandarNode titulo={<IconMathLower />} toolTip="Menor" backgroundColor="#FFD817" />);
      setDragNode('menor');
    } else if (type.accion === 'igual' || type === 'igual') {
      setNodeContent(<OperadorStandarNode titulo={<IconEqual />} toolTip="Igual" backgroundColor="#FF4141" />);
      setDragNode('igual');
    } else if (type.accion === 'distinto' || type === 'distinto') {
      setNodeContent(<OperadorStandarNode titulo={<IconEqualNot />} toolTip="Distinto a" backgroundColor="#960019" />);
      setDragNode('distinto');
    } else if (type.accion === 'mayorIgual' || type === 'mayorIgual') {
      setNodeContent(<OperadorStandarNode titulo=">=" toolTip="mayor Igual" backgroundColor="#79C226" />);
      setDragNode('mayorIgual');
    } else if (type.accion === 'menorIgual' || type === 'menorIgual') {
      setNodeContent(<OperadorStandarNode titulo="<=" toolTip="Menor Igual" backgroundColor="#2EB9FF" />);
      setDragNode('menorIgual');
    } else if (type.accion === 'contiene' || type === 'contiene') {
      setNodeContent(<OperadorStandarNode titulo={<IconBox />} toolTip="Contiene" backgroundColor="#FFB833" />);
      setDragNode('contiene');
    } else if (type.accion === 'noContiene' || type === 'noContiene') {
      setNodeContent(<OperadorStandarNode titulo={<IconBoxOff />} toolTip="No contiene" backgroundColor="#FF6433" />);
      setDragNode('noContiene');
    } else if (type.accion === 'operadorY' || type === 'operadorY') {
      setNodeContent(<OperadorStandarNode titulo="&" toolTip="Y" backgroundColor="#FF4141" />);
      setDragNode('operadorY');
    } else if (type.accion === 'operadorO' || type === 'operadorO') {
      setNodeContent(<OperadorStandarNode titulo="Ó" toolTip="O" backgroundColor="#FF4141" />);
      setDragNode('operadorO');
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  // const handleOpciones = (e) => {
  //   setOpcion(e.target.value);
  // };

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        //style={{ background: '#555555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />

      <Card
        onDrop={onDrop}
        onDragOver={onDragOver}
        style={{ paddingBottom: 0 }}
        sx={{
          minWidth: 250,
          padding: 0.5,
          margin: 0,
          border: `2px solid ${theme.palette.grey[200]}`,
          borderRadius: 2,
          borderLeft: '4px solid #ff9300'
        }}
      >
        <CardContent sx={{ padding: 0, margin: 0 }}>
          <Grid container direction="row">
            <IconFilter />
            <Grid item sx={{ marginLeft: 'auto' }}>
              <Avatar
                sx={{
                  backgroundColor: 'white',
                  color: `${theme.palette.grey[300]}`,
                  border: `2px solid ${theme.palette.grey[400]}`,
                  width: 16,
                  height: 16
                  //justifyItems: 'center'
                  //marginLeft: 'auto'
                }}
              >
                <IconButton onClick={handleNodeDelete}>
                  <IconCircleX />
                </IconButton>
              </Avatar>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Grid item alignItems="center">
              <select style={{ height: 25 }} value={data.opcion ? data.opcion : opcion} onChange={handleOption}>
                <option value="">escoja un campo</option>
                {options.map((opcion, index) => (
                  <option key={index} value={opcion}>
                    {opcion}
                  </option>
                ))}
              </select>
              {console.log('opcion escojida:', opcion)}
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Grid item md={3} sx={{ width: '100%', pt: 0.7 }} alignItems="center">
              {nodeContent}
            </Grid>
          </Grid>

          <Grid container direction="row" p={1} justifyContent="center">
            <Grid item alignItems="center">
              <input id="textFilter" placeholder={data.inputValue ? data.inputValue : ''} name="textFilter" onChange={onChange} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Handle
        type="source"
        position={Position.Right}
        id="a"
        //style={{ background: '#555555' }}
        isConnectable={isConnectable}
      />
    </>
  );
};
export default Cut;
