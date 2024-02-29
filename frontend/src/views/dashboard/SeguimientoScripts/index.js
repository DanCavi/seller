// material-ui
// import { Grid, InputLabel, Select, MenuItem, Paper } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Selectors from './components/Selectors';
import Avg from './components/Avg';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'topic',
    headerName: 'Topic'
  },
  {
    field: 'engaged_conversations',
    headerName: 'Engaged Conversations'
  },
  {
    field: 'volume',
    headerName: 'Volume'
  },
  {
    field: 'volume_change',
    headerName: 'Volume Change'
  },
  {
    field: 'avg_conversation',
    headerName: 'Avg. Conversation handle time (min)'
  },
  {
    field: 'avg_csat',
    headerName: 'Avg. CSAT'
  },
  {
    field: 'csat_impact',
    headerName: 'CSAT Impact'
  },
  {
    field: 'avg_sentiment',
    headerName: 'Avg. Sentiment'
  },
  {
    field: 'sentiment_impact',
    headerName: 'Sentiment Impact'
  }
];

const rows = [
  {
    id: 1,
    topic: 'Topic 1',
    engaged_conversations: 10,
    volume: '100%',
    volume_change: '10%',
    avg_conversation: '10',
    avg_csat: '10',
    csat_impact: '10%',
    avg_sentiment: '10',
    sentiment_impact: '10%'
  },
  {
    id: 2,
    topic: 'Topic 2',
    engaged_conversations: 10,
    volume: '100%',
    volume_change: '10%',
    avg_conversation: '10',
    avg_csat: '10',
    csat_impact: '10%',
    avg_sentiment: '10',
    sentiment_impact: '10%'
  }
];

// ==============================|| SAMPLE PAGE ||============================== //

const SeguimientoScripts = () => {
  return (
    <MainCard title="Motor de Seguimiento">
      <Selectors />
      <Avg />
      <DataGrid autoHeight rows={rows} columns={columns} />
    </MainCard>
  );
};

export default SeguimientoScripts;
