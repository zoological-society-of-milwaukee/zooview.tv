import React from 'react';
import { hydrate, render } from 'react-dom';
 

import App from './components/App';

const AppWrapper = () => (
    <App />  
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<AppWrapper />, rootElement);
} else {
  render(<AppWrapper />, rootElement);
}
