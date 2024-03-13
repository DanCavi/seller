import { useState, useEffect } from 'react';
import { Button, Grid, InputLabel } from '@mui/material';
import { IconUsersGroup } from '@tabler/icons-react';

const ButtonList = () => {
  const [data, setData] = useState([]);
  const fetchRows = async () => {
    const response = await fetch('http://localhost:5000/api/v1/data-exit/perfiles').then((response) => response.json());

    setData(response);
  };
  useEffect(() => {
    fetchRows();
  }, []);

  return (
    <Grid item xs={10}>
      <InputLabel>Perfiles</InputLabel>
      {data
        .map((profile) => (
          <Button sx={{ m: 0.7 }} key={profile.perfil_id} variant="contained" size="small" startIcon={<IconUsersGroup />}>
            {profile.nombre}
          </Button>
        ))}
    </Grid>
  );
};

export default ButtonList;
