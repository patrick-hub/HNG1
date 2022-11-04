import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './component/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Home />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
