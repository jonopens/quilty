import React from 'react';
import ToolPanel from '../menus/ToolPanel';
import WorkArea from '../containers/WorkArea';
import Footer from '../containers/Footer';

import './Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <ToolPanel />
      <WorkArea />
      <Footer />
    </div>
  );
};

export default Main;
