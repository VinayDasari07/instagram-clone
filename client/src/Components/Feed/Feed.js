import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux" 

export const Feed = () => {
  // const { state, dispatch } = useContext(UserContext);
  // const user = state;
  const user = useSelector(state => state.user);
  // useEffect(()=> {

  // },[user])
  // if (!user) {
  //   return <Redirect to="/login" />;
  // }
  // console.log(`state`)
  // console.log(state)
  return (
    <div>
      <h1>Working feed on {user ? user.Name : ''}</h1>
    </div>
  );
};
