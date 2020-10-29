import React from 'react';
import TopControls from '../menus/TopControls';
import WorkArea from '../containers/WorkArea';
import Footer from '../containers/Footer';

import './Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <TopControls />
      <WorkArea />
      <Footer />
    </div>
  );
};

export default Main;
