import './App.css';
import Login from './Components/Login';
import { Router, Route, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';


function App() {

  const history = createBrowserHistory();

  return (
    <Router  history={history}>
      <Route 
          exact path="/" 
          render = { () => { return (<Redirect to="/login" /> ) }}/>
      <Route 
          key="login" 
          exact path="/login" 
          children={<Login isLoginPage={true}/>}/>
      <Route 
          key="sign-in" 
          exact path="/sign-in" 
          children={<Login isLoginPage={false}/>}/>
    </Router>
  );
}

export default App;
