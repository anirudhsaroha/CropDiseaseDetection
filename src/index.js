import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import router from './routes/route';
import { RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './navigations/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageProvider>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
</LanguageProvider>
);

