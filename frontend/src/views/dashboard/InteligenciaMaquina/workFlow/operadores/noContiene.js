import React from 'react';
//Proyecto Operador Standar
import OperadorStandar from './operadorStandar';

//Icons
import { IconBoxOff } from '@tabler/icons';

function NoContiene() {
  return (
    <>
      <OperadorStandar toolTip="No Contiene" titulo={<IconBoxOff />} color="#FF6433" backgroundColor="#FF6433" textPlain="noContiene" />
    </>
  );
}

export default NoContiene;
