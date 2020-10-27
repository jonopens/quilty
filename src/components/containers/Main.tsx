import React from 'react';
import TopControls from '../menus/TopControls';
import ToolPanel from '../menus/ToolPanel';
import Quilt from './Quilt';

const Main = () => {
  return (
    <div>
      <TopControls />
      <ToolPanel />
      <Quilt />
    </div>
  );
};

export default Main;
