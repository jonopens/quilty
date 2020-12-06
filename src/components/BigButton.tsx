import React from 'react';

interface IButtonProps {
  command: string;
}

const BigButton = (props: IButtonProps) => {
  const [clicked, setClicked] = React.useState(false);
  const testLog = () => {
    setClicked(!clicked);
    console.log(props.command, ' test: ', clicked);
  };
  return (
    <div className="big-button" onClick={testLog}>
      {props.command}
    </div>
  );
};

export default BigButton;
