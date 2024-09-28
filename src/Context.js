import React, { useState } from "react";

import Dashboard from "./Dashboard";
import { DashboardContext } from "./DashboardContext";

// export interface User {
//     isSubscribed: Boolean;
//     name: String
// }

function Context() {
  const [user] = useState({
    isSubscribed: "true",
    name: "zake",
  });
  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard user={user} />
      </DashboardContext.Provider>
    </div>
  );
}

export default Context;
