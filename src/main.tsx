import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'

import "@spectrum-css/tokens";
import "@spectrum-css/button";
import "@spectrum-css/page";
import "@spectrum-css/typography";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
