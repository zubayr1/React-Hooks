import React, { useContext } from "react";
import { profileContext } from './App';

function Etc() {
    const profile = useContext(profileContext);
  return (
    <div>
      <p>Name: {profile}</p>
    </div>
  );
}

export default Etc;
