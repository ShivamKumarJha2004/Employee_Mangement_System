import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // Correctly import BrowserRouter
import AuthProvider from './Components/Auth/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>    
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
