import React from "react";
import { useSelector } from "react-redux" 

export const Feed = () => {
  const user = useSelector(state => state.user);
  return (
    <div>
      <h1>Working feed on {user ? user.name : ''}</h1>
    </div>
  );
};
