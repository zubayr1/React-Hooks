import React, { useState, useRef, useEffect } from "react";

function Ref() {
  const [name, setName] = useState("");

  const renderCount = useRef(1);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current += 1;
  });

  const handlebtnclick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>
      <div>Rendered: {renderCount.current}</div>

      <button onClick={handlebtnclick}>focus</button>
    </div>
  );
}

export default Ref;
