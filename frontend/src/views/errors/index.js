import { Button, Grid } from "@mui/material"
import MainCard from "ui-component/cards/MainCard"
import ErrorImage from './error.svg'
import { styled } from '@mui/material/styles';
import { useEffect } from "react";

const ErrorPage = ({ resetErrorBoundary }) => {
  

  useEffect(() => {
    console.log('Error...');
    return () => {
      resetErrorBoundary();
    }
  }, [])

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '60%',
    maxHeight: '100%',
  });
  
  
  return (
    <MainCard title="Error">
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12}>
          <Img src={ErrorImage} alt="error" />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          onClick={() => {
            resetErrorBoundary()
          }}
          sx={{ width: '20%' }}
        >
          Volver
        </Button>
        </Grid>
      </Grid>
    </MainCard>
  )
}

export default ErrorPage