import React from 'react';
import BigButton from '../BigButton';
import './Palette.css';

const Palette = () => {
  let buttons: JSX.Element[] = [];
  enum COMMANDS {
    SIZE = 'size',
    SPLIT = 'split',
    RESTART = 'restart',
  }

  for (const command of Object.values(COMMANDS)) {
    buttons.push(<BigButton command={command} key={`${command}_comm`} />)
  }

  return (
    <div className="palette">
      {buttons}
    </div>
  );
};

export default Palette;
