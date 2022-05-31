import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/pages/Nav/Nav';
import Menu from './components/pages/Menu/Menu';
import PopularItemsCard from './components/pages/PopularItems/PopularItemsCard';
import Wings from './components/pages/Wings/Wings';
import Container  from './components/Container';
import Foodmodal from './components/pages/shared/Foodmodal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
