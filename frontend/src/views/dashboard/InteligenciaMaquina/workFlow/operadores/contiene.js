import React from 'react';

//Operator Standar
import OperadorStandar from './operadorStandar';

//Icons
import { IconBox } from '@tabler/icons';

function Contiene() {
  return (
    <>
      <OperadorStandar titulo={<IconBox />} toolTip="Contiene" color="#FFB833" backgroundColor="#FFB833" textPlain="contiene" />
    </>
  );
}

export default Contiene;
