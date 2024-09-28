import React, { useCallback, useState, useMemo } from "react";
import List from "./List";

function Callback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (n) => {
      return [number, number + n, number + 2 * n];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>

      <List getItems={getItems} />
    </div>
  );
}

export default Callback;
