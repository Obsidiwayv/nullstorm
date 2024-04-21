import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import "ouroboros/index.css";
import Pallets from './fs/Pallets.ts';

Pallets.compile();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
