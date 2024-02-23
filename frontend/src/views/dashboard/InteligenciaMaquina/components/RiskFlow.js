import { Button } from '@mui/material';
import React, { useCallback, useState } from 'react';
import ReactFlow, { 
    Background,
    Controls,
    MiniMap,
    Panel,
    applyNodeChanges,
    applyEdgeChanges 
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    position: {
      x: 0,
      y: 0
    },
    data: {
      label: 'Node 1'
    }
  },
  {
    id: '2',
    position: {
      x: 0,
      y: 100
    },
    data: {
      label: 'Node 2'
    }
  }
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2'
  }
];

const RiskFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow nodes={nodes} edges={edges} onEdgesChange={onEdgesChange} onNodesChange={onNodesChange}>
        <Panel position="top-center">
          <Button variant="contained">Botoncito jij</Button>
        </Panel>
        <Background variant="cross" />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default RiskFlow;
