import React, { createContext } from "react";
import Profile from "./Profile";

export const profileContext = createContext();

function App() {
  const initialState = "Zakekal";

  return (
    <profileContext.Provider value={initialState}>
      <Profile />
    </profileContext.Provider>
  );
}

export default App;
