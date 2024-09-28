import React, { createContext } from "react";
// import Profile from "./Profile";
import State from "./State";
import Memo from "./Memo";
import Callback from "./Callback";
import Context from "./Context";
import Ref from "./Ref";
import Reducer from "./Reducer";

export const profileContext = createContext();

function App() {
  const initialState = "Zakekal";

  return (
    <profileContext.Provider value={initialState}>
      {/* <Profile /> */}
      <State />
      <Memo />
      <Callback />
      <Context />
      <Ref />
      <Reducer />
    </profileContext.Provider>
  );
}

export default App;
