import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './styles/css/index.css';
import App from './App';
import Router from './commons/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);

