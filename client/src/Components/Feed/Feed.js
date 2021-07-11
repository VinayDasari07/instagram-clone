import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../App";

export const Feed = () => {
  const { state, dispatch } = useContext(UserContext);
  const user = state;
  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1>Working feed on {user.Name}</h1>
    </div>
  );
};
