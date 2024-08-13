import React, {
  useRef,
  useMemo,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { profileContext } from "./App";

import Etc from "./Etc";

function Profile() {
  const inputRef = useRef();
  const etcRef = useRef();
  const name = useContext(profileContext);

  const handleClick = () => {
    inputRef.current.focus();
  };

  const nameLength = useMemo(() => {
    console.log("Computing name length...");
    return name.length;
  }, [name]);

  const handleResetText = useCallback(() => {
    if (etcRef.current) {
      etcRef.current.resetText();
    }
    console.log("useCallback");
  }, [etcRef]);

  useEffect(() => {
    if (etcRef.current) {
      etcRef.current.resetText();
    }
    console.log("useEffect");
  }, [etcRef]);

  return (
    <div>
      <input ref={inputRef} placeholder="type" />
      <br />
      <br />
      <button onClick={handleClick}>Focus</button>

      <h3>A Big Paragraph</h3>
      <p>Compiled successfully!</p>
      <p>Compiled successfully!</p>
      <p>Compiled successfully!</p>
      <p>Compiled successfully!</p>
      <p>Compiled successfully!</p>
      <p>Compiled successfully!</p>
      <p>Compiled successfully!</p>

      <p>Name Length: {nameLength}</p>

      <button onClick={handleResetText}>Reset Etc Text</button>

      <Etc ref={etcRef} />
    </div>
  );
}

export default Profile;
