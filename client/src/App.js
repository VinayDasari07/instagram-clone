import './App.css';
import Login from './Components/Login';
import { useState } from 'react';


function App() {
  const [isLoginPage, setIsLoginPage] = useState(true)

  function toggle(e) {
    e.preventDefault();
    if(isLoginPage !== undefined) {
      setIsLoginPage(!isLoginPage)
    }
  }

  return (
    <div className="App">
        <Login isLoginPage={isLoginPage} toggle={toggle}/>
    </div>
  );
}

export default App;
