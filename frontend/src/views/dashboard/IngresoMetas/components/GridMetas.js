import { Button } from '@mui/material';
import { DataGrid, GridToolbarContainer, useGridApiContext, useGridApiRef } from '@mui/x-data-grid';
import { IconDeviceFloppy } from '@tabler/icons-react';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const FormatedInput = (props) => {
  const { id, value, field, hasFocus } = props
  const apiRef = useGridApiContext();
  const ref = useRef();

  useLayoutEffect(() => {
    if (hasFocus) {
      ref.current.focus();
    }
  }, [hasFocus])

  const currencyFormatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  });

  const formattedValue = currencyFormatter.format(value ? Number(value) : 0);
  const handleValueChange = (event) => {
    const newValue = event.target.value;
    apiRef.current.setEditCellValue({ id, field, value: newValue})
    
  }
  return (
    <input ref={ref} style={{ backgroundColor: 'rgb(0,0,0,0)', height: '150%', width: '150%', padding: '10px', margin: '-10px'}} type='text' value={formattedValue} onChange={handleValueChange}/>
  )
}

function Toolbar(props) {
  function handleSave() {
    props.setCellsEdited([]);
    props.setHasUnsavedCells(false);
    props.unsavedChangesRef.current = {
      unsavedRows: {},
      rowsBeforeChange: {}
    };
  }

  return (
    <GridToolbarContainer sx={{ m: 1 }}>
      <Button variant="contained" startIcon={<IconDeviceFloppy />} onClick={handleSave} disabled={!props.hasUnsavedCells}>
        Guardar
      </Button>
    </GridToolbarContainer>
  );
}

const GridMetas = () => {
  const [hasUnsavedCells, setHasUnsavedCells] = useState(false);
  const [cellsEdited, setCellsEdited] = useState([]);

  const apiRef = useGridApiRef();
  const unsavedChangesRef = useRef({
    unsavedRows: {},
    rowsBeforeChange: {},
    unsavedCells: {},
    cellBeforeChange: {}
  });

  const onCellEditStop = (params, event) => {
    const alreadyExists = cellsEdited.some((row) => row.rowid === params.id && row.field === params.field);
    if (!alreadyExists) {
      const maxId = Math.max(...cellsEdited.map((row) => row.id), 0);
      setCellsEdited((prevCells) => [...prevCells, { id: maxId + 1, rowid: params.id, field: params.field }]);
    }
    setHasUnsavedCells(true);
    event.defaultMuiPrevented = true;
  };

  const processRowUpdate = (newRow, oldRow) => {
    const rowId = newRow.id;

    unsavedChangesRef.current.unsavedRows[rowId] = newRow;
    if (!unsavedChangesRef.current.rowsBeforeChange[rowId]) {
      unsavedChangesRef.current.rowsBeforeChange[rowId] = oldRow;
    }
    return newRow;
  };

  const currencyFormatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  });

  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  const rows = [
    {
      id: 1,
      EJECUTIVO: 'Ejecutivo 1',
      ENERO: 2000,
      FEBRERO: 3000
    },
    {
      id: 2,
      EJECUTIVO: 'Ejecutivo 2',
      ENERO: 600000,
      FEBRERO: 800000
    }
  ];

  const columns = [
    {
      field: 'EJECUTIVO',
      headerName: 'Ejecutivo',
      width: 200
    },
    ...meses.map((mes) => ({
      field: mes.toUpperCase(),
      headerName: mes,
      width: 100,
      filterable: false,
      editable: true,
      type: 'number',
      renderEditCell: (params) => (
        <FormatedInput {...params} />
      ),
      valueParser: (value) => {
        return parseInt(value.replace(/\D/g, ''), 10);
      },
      valueFormatter: ({ value }) => currencyFormatter.format(Number(value) ? Number(value) : 0)
    }))
  ];

  return (
    <DataGrid
      autoHeight
      columns={columns}
      rows={rows}
      processRowUpdate={processRowUpdate}
      onProcessRowUpdateError={(e) => console.log('ERROR:  \n', e)}
      apiRef={apiRef}
      onCellEditStop={onCellEditStop}
      disableRowSelectionOnClick
      sx={{
        '& .MuiDataGrid-row.row--edited': {
          backgroundColor: '#feff3842'
        },
        '& .MuiDataGrid-cell.cell--edited': {
          backgroundColor: '#86f372d4'
        }
      }}
      slots={{
        toolbar: Toolbar
      }}
      slotProps={{
        toolbar: {
          hasUnsavedCells,
          setHasUnsavedCells,
          unsavedChangesRef,
          setCellsEdited
        }
      }}
      getRowClassName={({ id }) => {
        const unsavedRow = unsavedChangesRef.current.unsavedRows[id];
        return unsavedRow ? 'row--edited' : '';
      }}
      getCellClassName={(params) => {
        const unsavedRowId = params.id;
        const unsavedField = params.field;
        const alreadyExists = cellsEdited.some((row) => row.rowid === unsavedRowId && row.field === unsavedField);
        if (alreadyExists) {
          return 'cell--edited';
        }
        return '';
      }}
    />
  );
};

export default GridMetas;
