import React from 'react';
import { Avatar, Tooltip } from '@mui/material';
//Theme
import { useTheme } from '@mui/material';

function OperadorStandar({ titulo, backgroundColor, toolTip }) {
  //definir theme
  const theme = useTheme();
  return (
    <>
      <Tooltip title={`(${toolTip})`} placement="left">
        <Avatar
          variant="circular"
          size="small"
          sx={{
            borderRadius: 5,
            backgroundColor: { backgroundColor },
            borderColor: { backgroundColor },
            boxShadow: `0px 4px 4px ${theme.palette.grey[300]}`,
            color: 'white',
            fontWeight: 600,
            alignItems: 'center'
          }}
        >
          {titulo}
        </Avatar>
      </Tooltip>
    </>
  );
}

export default OperadorStandar;
