import React from "react";
import { Redirect } from "react-router-dom";

export const Feed = ({ user }) => {
  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1>Working feed on {user.Name}</h1>
    </div>
  );
};
