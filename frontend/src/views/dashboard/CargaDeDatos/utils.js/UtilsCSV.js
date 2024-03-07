import { Button } from '@mui/material';
import { IconFileTypeCsv, IconCloudUpload } from '@tabler/icons-react';
import { styled } from '@mui/material/styles';

export const columns = [
  {
    field: 'nombre',
    headerName: 'Nombre',
    flex: 1
  },
  {
    field: 'apellido',
    headerName: 'Apellido',
    flex: 1
  },
  {
    field: 'correo',
    headerName: 'Correo',
    flex: 1
  },
  {
    field: 'telefono',
    headerName: 'Telefono',
    flex: 1
  },
  {
    field: 'nacionalidad',
    headerName: 'Nacionalidad',
    flex: 1
  }
];

export const ExampleCSV = () => {
  function generarCSV() {
    const contenido = 'NOMBRE,APELLIDO,CORREO,TELEFONO,NACIONALIDAD\nDante,Cavieres,dcavieres@expertchoice,12345678,Chile';
    const blob = new Blob([contenido], { type: 'text/csv' });
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(blob);
    enlace.download = 'example.csv';
    enlace.click();
    URL.revokeObjectURL(enlace.href);
  }

  return (
    <Button
      sx={{
        ml: 1
      }}
      variant="outlined"
      onClick={generarCSV}
    >
      <IconFileTypeCsv size={30} color="#00b341" />
    </Button>
  );
};

export const UploadFile = ({ setRows }) => {

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  });

  const handleCargaArchivos = (event) => {
    const archivo = event.target.files[0];

    if (archivo) {
      const cursor = new FileReader();
      cursor.onload = async (e) => {
        const contenido = e.target.result;
        const blob = new Blob([contenido], { type: 'text/csv' });
        const texto = await blob.text();
        const lineas = texto.split('\n').filter((linea) => linea.trim() !== '');
        const cabecera = lineas[0].split(',').map((cabecera) => cabecera.toLowerCase().trim());
        for (let i = 1; i < lineas.length; i++) {
          const linea = lineas[i].split(',');
          const objeto = { id: i };
          for (let j = 0; j < cabecera.length; j++) {
            objeto[cabecera[j]] = linea[j];
          }
          setRows((rows) => [...rows, objeto]);
        }
      };

      cursor.readAsText(archivo);
    }
  };

  return (
    <Button sx={{ mt: 2, mb: 2}} fullWidth component="label" variant="contained" tabIndex={-1} startIcon={<IconCloudUpload />}>
      Carga de datos
      <VisuallyHiddenInput type="file" accept="text/csv" onChange={handleCargaArchivos} />
    </Button>
  );
};
