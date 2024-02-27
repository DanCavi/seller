import { useState, useEffect } from 'react';
import { Button, Grid, InputLabel } from '@mui/material';
import { IconUsersGroup } from '@tabler/icons-react';


const ButtonList = () => {
  const [data, setData] = useState([]);
  const fetchRows = async () => {
    const response = await fetch('/profiles').then((response) => response.json());

    setData(response);
  };
  useEffect(() => {
    fetchRows();
  }, []);

  return (
    <Grid item xs={10}>
      <InputLabel>Perfiles</InputLabel>
      {data
        .filter((profile) => profile.ADMIN === 0)
        .map((profile) => (
          <Button sx={{ m: 0.7 }} key={profile.PER_ID} variant="contained" size="small" startIcon={<IconUsersGroup />}>
            {profile.PER_NOMBRE}
          </Button>
        ))}
    </Grid>
  );
};

export default ButtonList;
