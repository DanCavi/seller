import { Button } from "@mui/material"
import MainCard from "ui-component/cards/MainCard"
import ErrorImage from './error.svg'

const ErrorPage = ({ error, resetErrorBoundary }) => {
  console.log(error)
  return (
    <MainCard title="Error" sx={{ textAlign: 'center' }}>
      <img src={ErrorImage} alt="error" style={{ width: '80%' }} />
    
      <Button
        variant="contained"
        onClick={() => {
          resetErrorBoundary()
        }}
      >
        Volver
      </Button>
    </MainCard>
  )
}

export default ErrorPage