import React from 'react'
import ReactDOM from 'react-dom/client';
import Outlet from './Outlet';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Outlet />
  </React.StrictMode>,
)