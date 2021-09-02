import React from 'react';
import { Handle } from 'react-flow-renderer';
const customNodeStyles = {
  background: 'papayawhip',
  color: 'black',
  padding: 10,
  borderRadius: 5
};
export default function ScenarioNode({ data }) {
  return (
    <div style={customNodeStyles}>
      {/* <Handle type="target" position="left" style={{ borderRadius: 0 }} /> */}
      <div>{data.label}</div>
      {/* <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: '30%', borderRadius: 0 }}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ top: '70%', borderRadius: 0 }}
      /> */}
    </div>
  );
}
