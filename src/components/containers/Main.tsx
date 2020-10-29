import React from 'react';
import TopControls from '../menus/TopControls';
import WorkArea from '../containers/WorkArea';

import './Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <TopControls />
      <WorkArea />
    </div>
  );
};

export default Main;
