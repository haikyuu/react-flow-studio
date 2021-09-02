import React, { useState } from 'react';
import ReactFlow, {
  Controls,
  Background,
  ControlButton
} from 'react-flow-renderer';
import 'react-flow-renderer/dist/theme-default.css';
import { Elements } from 'react-flow-renderer/dist/types';
import ScenarioNode from './ScenarioNode';
// import { useSetState } from 'ahooks';

const nodeTypes = {
  scenario: ScenarioNode
};
const initialElements = [
  {
    id: '1',
    data: { label: 'My first Scenario', description: 'D1' },
    position: { x: 250, y: 5 },
    type: 'scenario'
  },
  {
    id: '2',
    data: { label: 'My Second Scenario', description: 'D2' },
    position: { x: 150, y: 5 },
    type: 'scenario'
  }
  // you can also pass a React component as a label
  // { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
  // { id: 'e1-2', source: '1', target: '2', animated: true }
];

const width = window.innerWidth;
const height = window.innerHeight;

export default () => {
  const [selected, setSelected] = useState('');
  const [elements, setElements] = useState<Elements>(initialElements);

  const onLabelChange = e => {
    const value = e.target.value;
    setElements(_elements =>
      _elements.map(el => {
        if (el.id === selected) {
          return { ...el, data: { ...el.data, label: value } };
        }
        return el;
      })
    );
  };
  const onDescriptionChange = e => {
    const value = e.target.value;
    setElements(_elements =>
      _elements.map(el => {
        if (el.id === selected) {
          return { ...el, data: { ...el.data, description: value } };
        }
        return el;
      })
    );
  };
  const onSelectionChange = elements => {
    if (!elements) {
      setSelected('');
      return;
    }
    setSelected(elements[0].id);
  };
  const selectedElement = elements.find(e => e.id === selected);
  return (
    <div className="h-80 bg-green" style={{ width, height }}>
      <ReactFlow
        onSelectionChange={onSelectionChange}
        nodeTypes={nodeTypes}
        elements={elements}
      >
        <Controls>
          <ControlButton onClick={() => console.log('action')}>F</ControlButton>
        </Controls>
        <Background />
      </ReactFlow>
      {selectedElement ? (
        <div className="absolute right-6 top-12 z-10 h-5/6 w-52 p-4 bg-gray-200 rounded-md normal-case">
          <div className="">
            <button className="mr-4">Graphical</button>
            <button>Code</button>
          </div>
          <section className="mt-4">
            <input
              className="text-sm p-2 bg-gray-300 w-full"
              value={selectedElement.data.label}
              onChange={onLabelChange}
            />
            <textarea
              className="text-sm p-2 bg-gray-300 mt-2 w-full h-24"
              value={selectedElement.data.description}
              onChange={onDescriptionChange}
            />
          </section>
        </div>
      ) : null}
    </div>
  );
};
