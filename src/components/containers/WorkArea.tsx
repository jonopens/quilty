import React from 'react';
import ToolPanel from '../menus/ToolPanel';
import Quilt from '../Quilt';
import './WorkArea.css';

const WorkArea = () => {
  return (
    <div className="work-area">
      <ToolPanel />
      <Quilt />
    </div>
  );
};

export default WorkArea;