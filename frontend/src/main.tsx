import 'bootstrap/dist/css/bootstrap.min.css'; // HARUS PALING ATAS!
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // CSS kamu sendiri (boleh juga tidak ada)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
