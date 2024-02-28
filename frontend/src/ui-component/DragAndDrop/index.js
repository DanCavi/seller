import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import Titulo from 'ui-component/Titulo/Titulo';
//Icon
import { IconFile3d } from '@tabler/icons';
//Import Alert components
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { propTypes } from 'react-bootstrap/esm/Image';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function DragArea({ onChange }) {
  const [fileSelectedPrevious, setFileSelectedPrevious] = useState(null);
  const [seccessAlert, setSuccesAlert] = useState(false);

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccesAlert(false);
  };

  const changeFile = (e) => {
    console.log(e.target.files);
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        setFileSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrar en pantalla
      };
      if (onChange) {
        onChange(e.target.files[0]);
      }
      setSuccesAlert(true);
    }
  };
  return (
    <>
      <StyleDragArea>
        <div className="image-upload-wrap">
          <input
            className="file-upload-input"
            type="file"
            accept=".pdf,.txt, text/plain"
            id="upload"
            name="upload"
            multiple
            onChange={(e) => {
              changeFile(e);
            }}
          />
          <div className="text-information">
            <Titulo titulo="Arrastra aquí tu Archivo" fontSize="20px" />
            {fileSelectedPrevious !== null ? <IconFile3d /> : ''}
          </div>
        </div>
        <Snackbar open={seccessAlert} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
            style={{ fontWeight: 600, color: 'white', backgroundColor: '#229954', borderRadius: 2 }}
          >
            Archivo Cargado
          </Alert>
        </Snackbar>
      </StyleDragArea>
    </>
  );
}
DragArea.propTypes = {
  value: propTypes.any,
  onChange: propTypes.func,
  alertOpen: propTypes.any,
  onClose: propTypes.func
};
export default DragArea;

const StyleDragArea = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .file-upload-content {
    display: none;
    text-align: center;
  }

  .file-upload-input {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }

  .image-upload-wrap {
    position: relative;
    height: 100px;
    border: 4px solid #d0d7de;
    margin-left: 0;
    margin-right: 0;
  }

  .image-upload-wrap:hover {
    background-color: transparent;
    border: 4px dashed #d0d7de;
  }
  .text-information {
    margin-top: 30px;
    text-align: center;
  }
`;
