import React, { useMemo, useState } from "react";

import { initialItems } from "./utils";

function Memo() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(() => {
    return items.find((item) => item.isSelected);
  }, [items]);

  return (
    <div>
      <h2>Memo</h2>

      <p>Count:{count}</p>
      <p>selected item:{selectedItem?.id}</p>
      <button onClick={() => setCount(count + 1)}>Set Count</button>
    </div>
  );
}

export default Memo;
