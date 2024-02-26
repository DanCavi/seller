import React, { useState, useEffect } from 'react';
import { Button, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { Handle, Position } from 'reactflow';
//Icon
import { IconCircleX, IconFilter, IconBox, IconBoxOff, IconEqualNot, IconEqual, IconMathLower, IconMathGreater } from '@tabler/icons-react';
//import Operador standarNode
import OperadorStandarNode from '../operadores/operadorStandarNode';
//theme
import { useTheme } from '@mui/material';

const Cut = ({ isConnectable, id, data }) => {
  //Funcion Delete Node
  const onDeleteNode = data?.onDeleteNode; // Obtener onDeleteNode de los datos

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

  //Funcion para guardar id y type en localStorage
  useEffect(() => {
    if (buttonType) {
      localStorage.setItem(`buttonType_${id}`, buttonType);
    }
  }, [buttonType, id]);

  //FUNCION PARA GUARDAR EN SOTORAGE BOTON MAs id
  useEffect(() => {
    const savedButtonType = localStorage.getItem(`buttonType_${id}`);
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

    //const buttonType = event.dataTransfer.getData('text/plain');
    // Si es un botón, puedes crear un botón dentro del nodo aquí.
    console.log('tipo de boton: ', setButtonType);
    <Button sx={{ cursor: 'grab', width: '100%' }}>boton3 3</Button>;

    //Prueba codigo para almacenar un input

    //Fin prueba codigo almacena input
  };

  const updateNodeContent = (type) => {
    if (type.accion === 'mayor' || type === 'mayor') {
      // Crea y coloca el botón dentro del nodo.
      setNodeContent(<OperadorStandarNode titulo={<IconMathGreater />} toolTip="Mayor" backgroundColor="#FF9217" />);
    } else if (type.accion === 'menor' || type === 'menor') {
      // Crea y coloca el botón dentro del nodo.
      setNodeContent(<OperadorStandarNode titulo={<IconMathLower />} toolTip="Menor" backgroundColor="#FFD817" />);
    } else if (type.accion === 'igual' || type === 'igual') {
      setNodeContent(<OperadorStandarNode titulo={<IconEqual />} toolTip="Igual" backgroundColor="#FF4141" />);
    } else if (type.accion === 'distinto' || type === 'distinto') {
      setNodeContent(<OperadorStandarNode titulo={<IconEqualNot />} toolTip="Distinto a" backgroundColor="#960019" />);
    } else if (type.accion === 'mayorIgual' || type === 'mayorIgual') {
      setNodeContent(<OperadorStandarNode titulo=">=" toolTip="mayor Igual" backgroundColor="#79C226" />);
    } else if (type.accion === 'menorIgual' || type === 'menorIgual') {
      setNodeContent(<OperadorStandarNode titulo="<=" toolTip="Menor Igual" backgroundColor="#2EB9FF" />);
    } else if (type.accion === 'contiene' || type === 'contiene') {
      setNodeContent(<OperadorStandarNode titulo={<IconBox />} toolTip="Contiene" backgroundColor="#FFB833" />);
    } else if (type.accion === 'noContiene' || type === 'noContiene') {
      setNodeContent(<OperadorStandarNode titulo={<IconBoxOff />} toolTip="No contiene" backgroundColor="#FF6433" />);
    } else if (type.accion === 'operadorY' || type === 'operadorY') {
      setNodeContent(<OperadorStandarNode titulo="&" toolTip="Y" backgroundColor="#FF4141" />);
    } else if (type.accion === 'operadorO' || type === 'operadorO') {
      setNodeContent(<OperadorStandarNode titulo="Ó" toolTip="O" backgroundColor="#FF4141" />);
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const [valor, setValor] = useState('');
  const handleValor = (e) => {
    setValor(e.target.value);
  };

  const [opcion, setOpcion] = useState('');
  const handleOpciones = (e) => {
    setOpcion(e.target.value);
  };

  console.log('valor :', valor);
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
              <select style={{ height: 25 }} value={opcion} onChange={handleOpciones}>
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
              {' '}
              <input onChange={handleValor} />
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
