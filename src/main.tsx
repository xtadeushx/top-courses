import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';

import 'styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
