// import React, { useState /* useState, useEffect*/ } from 'react';
// // importacion de Grid y elementos

// import { MenuItem, Select, FormControl, ThemeProvider, createTheme } from '@mui/material';
// import TituloStandar from '../tituloStandar';

// const theme = createTheme({
//   components: {
//     // Name of the component
//     MuiFormControl: {
//       styleOverrides: {
//         // Name of the slot
//         root: {
//           // Some CSS
//           borderRadius: 0,
//           fontSize: '10px'
//         }
//       }
//     }
//   }
// });
// const options = ['Estado', 'DeudaMaxima', 'DeudasTotales', 'AcumulaciónDeudas'];
// function InputTipoPersona({ titulo }) {
//   // == estados Iniciales == //
//   const [option, setOption] = useState('');

//   const handleChange = (event) => {
//     setOption(event.target.value);
//   };

//   return (
//     <>
//       <TituloStandar titulo={titulo} />
//       <ThemeProvider theme={theme}>
//         <FormControl sx={{ m: 0, minWidth: '100%', backgroundColor: '#FAFAFA' }} size="small">
//           {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
//           {console.log('option:', option)}
//           <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={option} onChange={handleChange} size="small">
//             <MenuItem value="">
//               <em style={{ color: '#9E9E9E' }}>Seleccione</em>
//             </MenuItem>
//             {options.map((opcion, index) => (
//               <MenuItem key={index} value={opcion}>
//                 {opcion}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </ThemeProvider>
//     </>
//   );
// }

// export default InputTipoPersona;
