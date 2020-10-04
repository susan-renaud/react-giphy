import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const Hello = (props) => {
  return (
    <div className="Container">
      <h1>
        Hello,
        {props.name}
      </h1>
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name=" Susan" />,
    root);
}
