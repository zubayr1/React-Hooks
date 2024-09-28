import React, { useState, useEffect } from "react";

function State() {
  const [counter, setCounter] = useState(0);
  const [divByTen, setDivByTen] = useState(false);

  const update = (val) => {
    setCounter(counter + val);
  };

  const updateDef = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    if (counter % 10 === 0) {
      setDivByTen(true);
    } else {
      setDivByTen(false);
    }
    console.log(counter);

    return () => {
      console.log("useEffect getting destroyed");
    };
  }, [counter]);

  let layout = <div></div>;

  if (divByTen) {
    layout = (
      <div>
        <p>Counter is Divisible by 10</p>
      </div>
    );
  } else {
    layout = <div></div>;
  }

  return (
    <div>
      <h2>UseState</h2>
      <button onClick={() => updateDef()}>increment</button>
      <br />
      <button onClick={() => update(-1)}>decrement</button>

      <br />
      {counter}

      <br />
      {layout}
    </div>
  );
}

export default State;
