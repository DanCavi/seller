import React from 'react';
//Operador Standar
import OperadorStandar from './operadorStandar';
//Icons
import { IconEqualNot } from '@tabler/icons-react';

function Distinto() {
  return (
    <>
      <OperadorStandar titulo={<IconEqualNot />} toolTip="Distinto a" color="#960019" backgroundColor="#960019" textPlain="distinto" />
    </>
  );
}

export default Distinto;
