import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '/src/App';
import '/src/App.css';
import 'bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css/bundle";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
