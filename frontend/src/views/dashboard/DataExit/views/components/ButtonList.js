import { useState, useEffect } from 'react';
import { Button, Grid } from '@mui/material';
import { IconUsersGroup } from '@tabler/icons-react';
import { getPerfiles } from '../../api';

const ButtonList = () => {
  const [data, setData] = useState([]);
  const [selectedPerfil, setSelectedPerfil] = useState({});

  useEffect(() => {
    getPerfiles()
      .then((response) => {
        setData(response);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  


  return (
    <Grid item xs={12}>
        {data.map((perfil) => (
          <Button
            sx={{ m: 0.7 }} 
            key={perfil.perfil_id} 
            variant="contained" 
            size="small" 
            startIcon={<IconUsersGroup />}
            onClick={() => setSelectedPerfil(perfil)}
            color={selectedPerfil.perfil_id === perfil.perfil_id ? 'secondary' : 'primary'}
          >
          {perfil.nombre}
        </Button>
        ))}
    </Grid>
  );
};

export default ButtonList;
