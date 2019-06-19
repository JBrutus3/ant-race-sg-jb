import React from 'react';
import ReactDOM from 'react-dom';
import AntRaceApp from '../components/AntRaceApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AntRaceApp />, div);
});
