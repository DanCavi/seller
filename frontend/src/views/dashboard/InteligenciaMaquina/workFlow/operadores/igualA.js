import React from 'react';
import OperadorStandar from './operadorStandar';

function Igual() {
  return (
    <>
      <OperadorStandar titulo="=" color="#FF4141" backgroundColor="#FF4141" textPlain="igual" toolTip="Igual a" />
    </>
  );
}

export default Igual;
