import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Components/Login';
import { Router, Route } from 'react-router'

ReactDOM.render(
  <Router>
      <Route path = "/a" component = {App}>
         <Route 
          key="login"
          path = "login" 
          component = {Login} />
         <Route 
          key="login"
          path = "sign" 
          component = {Login} />
      </Route>
   </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
