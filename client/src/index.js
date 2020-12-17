import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  
    <BrowserRouter><App/></BrowserRouter>,
  
  document.getElementById('root')
);

ReactDOM.render(<App/>, document.getElementById('root'))
