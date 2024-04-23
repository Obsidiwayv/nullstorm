import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import './Global.ts';

import Pallets from './fs/Pallets.ts';
import { NextUIProvider } from '@nextui-org/react';
import Emittery from 'emittery';

Pallets.compile();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
)
