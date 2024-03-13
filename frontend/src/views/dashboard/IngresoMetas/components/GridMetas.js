import { Button } from '@mui/material';
import { DataGrid, GridToolbarContainer, useGridApiRef } from '@mui/x-data-grid';
import { IconDeviceFloppy } from '@tabler/icons-react';
import { useRef } from 'react';
import { useState } from 'react';

function Toolbar(props) {
  function handleSave() {
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

  const apiRef = useGridApiRef();
  const unsavedChangesRef = useRef({
    unsavedRows: {},
    rowsBeforeChange: {},
    unsavedCells: {},
    cellBeforeChange: {}
  });

  const onCellEditStop = (params) => {
    unsavedChangesRef.current.unsavedCells[params.id] = params.field;
    if (!unsavedChangesRef.current.cellBeforeChange[params.id]) {
      unsavedChangesRef.current.cellBeforeChange[params.id] = params.field;
    }
  }

  const processRowUpdate = (newRow, oldRow) => {
    const rowId = newRow.id;

    unsavedChangesRef.current.unsavedRows[rowId] = newRow;
    if (!unsavedChangesRef.current.rowsBeforeChange[rowId]) {
      unsavedChangesRef.current.rowsBeforeChange[rowId] = oldRow;
    }
    setHasUnsavedCells(true);
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
      valueFormatter: ({ value }) => currencyFormatter.format(Number(value) ? Number(value) : 0)
    }))
  ];

  return (
    <DataGrid
      autoHeight
      columns={columns}
      rows={rows}
      processRowUpdate={processRowUpdate}
      disableRowSelectionOnClick
      apiRef={apiRef}
      onCellEditStop={onCellEditStop}
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
          unsavedChangesRef
        }
      }}
      getRowClassName={({ id }) => {
        const unsavedRow = unsavedChangesRef.current.unsavedRows[id];
        return unsavedRow ? 'row--edited' : '';
      }}
      getCellClassName={(params) => {
        const unsavedRow = unsavedChangesRef.current.unsavedRows[params.id];
        const unsavedCell = unsavedChangesRef.current.unsavedCells[params.id];
        if (unsavedRow && unsavedCell === params.field) {console.log('params: \n',params)}
        if (unsavedCell === params.field && unsavedRow)
          {return 'cell--edited'}
      }}
    />
  );
};

export default GridMetas;
