import React from 'react';
import { render } from 'react-dom';

import Home from './components/Home';

render(
  <Home name="Johnny boy" age={27} />,
  document.querySelector('#app')
);