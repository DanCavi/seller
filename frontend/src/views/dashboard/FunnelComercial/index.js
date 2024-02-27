import { Grid } from "@mui/material"
import { RepoFunn, FunnCom, HistReglas, ListReglas } from "./views"


const FunnelComercial = () => {


  return (

    <Grid container spacing={2}>
    <Grid item xs={12}>
      <RepoFunn />
    </Grid>
    <Grid item xs={12}>
      <FunnCom />
    </Grid>
    <Grid item xs={12}>
      <ListReglas />
    </Grid>
    <Grid item xs={12}>
      <HistReglas />
    </Grid>

  </Grid>
  );
}

export default FunnelComercial