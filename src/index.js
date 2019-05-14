import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<AppWrapper />, rootElement);
} else {
  render(<AppWrapper />, rootElement);
}
