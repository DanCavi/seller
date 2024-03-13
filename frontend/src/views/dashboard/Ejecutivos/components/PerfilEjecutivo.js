import { Avatar, Button, ButtonGroup, Grid, LinearProgress, Paper, Typography, Divider, Box } from "@mui/material"
import { IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter, IconCalendar } from "@tabler/icons-react"

const PerfilEjecutivo = ({ejecutivo}) => {
  
  function fullRut(rut, digito_verificador) {
    rut = rut.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    let rutCompleto = rut + '-' + digito_verificador
    return rutCompleto
  } 


  return (
    <Grid item xs={4}>
        <Paper>
          <Grid item p={2} xs={12} sx={{ justifyContent: 'flex-end', display: 'flex' }}>
            <ButtonGroup variant="outlined">
              <Button>
                <IconBrandTwitter />
              </Button>
              <Button>
                <IconBrandFacebook />
              </Button>
              <Button>
                <IconBrandLinkedin />
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12} m={4} p={2}>
            <Avatar sx={{ width: 100, height: 100 }} />
          </Grid>
          <Grid item xs={12} m={2}>
            <Typography variant="h3">{`${ejecutivo.nombre} ${ejecutivo.apellido}`}</Typography>
          </Grid>
          <Grid item xs={12} m={2}>
            <Typography variant="body1">{`${ejecutivo.perfil}`}</Typography>
          </Grid>
          <Grid item xs={12} ml={2} mr={2}>
            <LinearProgress 
              variant="determinate"
              value={65} 
              sx={{
                height: 10,
                backgroundColor: '#03ff0b54',
                '& .MuiLinearProgress-bar1Determinate': {
                  backgroundColor: '#40db36'
                }
              }}   
            />
          </Grid>
          <Grid item xs={12} mt={3}>
            <Divider variant='fullWidth' sx={{ border: '1px solid', color: '#1e88e5'}} />
          </Grid>
          <Grid item xs={12} m={2}>
            <Typography display={'inline'} variant="h4">Rut:</Typography> <Typography display={'inline'} variant='subtitle1'>{fullRut(ejecutivo.rut, ejecutivo.digito_verificador)}</Typography>
          </Grid>
          <Grid item xs={12} m={2} mt={-2}>
            <Typography display={'inline'} variant="h4">Sucursal:</Typography> <Typography display={'inline'} variant='subtitle1'>ExpertChoice</Typography>
          </Grid>
          <Box>

          <Grid item xs={12} height={'100%'}>
            <Divider variant='fullWidth' sx={{ border: '1px solid', color: '#a0a0a0' }} />
          </Grid>
          <Grid
            container 
            p={2} 
            textAlign={'center'} 
            justifyContent={'space-between'} 
            item 
            xs={12} 
            sx={{ 
              backgroundColor: '#eaeaea',
              height: '100%'
            }}>
            <Grid item xs={3}>
              Proyectos:
              <Typography variant="body1">10</Typography>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ border: '1px solid', color: '#a0a0a0', ml: 1, mr: 1 }} />
            <Grid item xs={3}>
              Mensajes: 
              <Typography variant="body1">80000</Typography>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ border: '1px solid', color: '#a0a0a0', ml: 1, mr: 1 }} />
            <Grid item xs={3}>
              Ver Gestiones
              <Button variant="outlined"><IconCalendar /></Button>
            </Grid>
          </Grid>
          </Box>
        </Paper>
      </Grid>
  )
}

export default PerfilEjecutivo