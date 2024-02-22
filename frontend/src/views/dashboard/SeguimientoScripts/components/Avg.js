import { Grid, Paper } from '@mui/material';

const Avg = () => (
    <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={2}>
          <Paper>
            <Grid container direction={'column'} textAlign={'center'} spacing={2}>
              <Grid item>
                Engaged Conversations
              </Grid>
              <Grid item fontSize={'2rem'}>
                263
              </Grid>
              <Grid item>
                0.0%
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <Grid container direction={'column'} textAlign={'center'} spacing={2}>
              <Grid item>Avg. conversation handler</Grid>
              <Grid item fontSize={'2rem'}>1.01</Grid>
              <Grid item>0.0%</Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <Grid container direction={'column'} textAlign={'center'} spacing={2}>
              <Grid item>
                Avg. <br /> CSAT
              </Grid>
              <Grid item fontSize={'2rem'}>
                3.37%
              </Grid>
              <Grid item>
                0.0%
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <Grid container direction={'column'} textAlign={'center'} spacing={2}>
              <Grid item>
                Avg. conversation sender
              </Grid>
              <Grid item fontSize={'2rem'}>
                8.26
              </Grid>
              <Grid item>
                0.0%
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <Grid container direction={'column'} textAlign={'center'} spacing={2}>
              <Grid item>
                Avg. customer effor time
              </Grid>
              <Grid item fontSize={'2rem'}>
                6.70
              </Grid>
              <Grid item>
                0.0%
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <Grid container direction={'column'} textAlign={'center'} spacing={2}>
              <Grid item>
                Transfer <br/> rate
              </Grid>
              <Grid item fontSize={'2rem'}>
                0.10
              </Grid>
              <Grid item>
                0.0%
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
)

export default Avg