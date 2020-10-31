import React from 'react';
import Palette from '../menus/Palette';
import Quilt from '../Quilt';
import './WorkArea.css';

const WorkArea = () => {
  return (
    <div className="work-area">
      <Palette />
      <Quilt />
    </div>
  );
};

export default WorkArea;