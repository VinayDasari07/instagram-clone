import "./App.css";
import { Login } from "./Components/Login/Login";
import { Feed } from "./Components/Feed/Feed";
import { Navbar } from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { useState, createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { axiosConfig } from ".//config-files/axios.config.js";
import UserProfile from "./Components/UserProfile/UserProfile";
import { reducer, initialState } from './reducers/userReducer'

export const UserContext = createContext()
function Routing() {
  const history = useHistory()
  const {state, dispatch} = useContext(UserContext)
  // const [ user, userDispatch] = useReducer(reducer,initialState)
  // const [ state, dispatch] = useReducer(reducer,initialState)
  const [user, setUser] = useState(null);
  console.log(history)
  useEffect(()=>{
    // const user = JSON.parse(localStorage.getItem("user"))
    // if(user){
    //   dispatch({type:"USER",payload:user})
    // }else{
    //   if(!history.location.pathname.startsWith('/reset'))
    //        history.push('/signin')
    // }
    axios
      .get("/api/get-logged-in-user", axiosConfig)
      .then((res) => {
        dispatch({type:"USER",payload:res.data})
        // setUser(res.data);
      })
      .catch((err) => {
        console.log(`history`)
        console.log(history)
        // if(!history.location.pathname.startsWith('/reset'))
        history.push('/login')
        console.log(history)
        console.log(err)
      });
  },[])
  return (
    // <UserContext.Provider value={{state, dispatch}}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <UserProfile />
          </Route>
          <Route path="/login">
            <Login user={user} setUser={setUser} />
          </Route>
          <Route path="/signup">
            <Signup user={user} />
          </Route>
          <Route path="/user-feed">
            <Feed user={user} />
          </Route>
          <Route path="/user-profile">
            <UserProfile user={user} />
          </Route>
        </Switch>
      </Router>
    // </UserContext.Provider>
  );
}

function App() {
  const [ state, dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <Router>
      <Navbar />
      <Routing />
    </Router>
    </UserContext.Provider>
  );
}

export default App;
