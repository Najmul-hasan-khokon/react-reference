import React from "react";
import { useState } from "react/cjs/react.development";
import Home from "./components/pages/Home";

export const context = React.createContext();

const App = () => {
  const [count, setCount] = useState("laptop");
  return (
    <context.Provider value={[count, setCount]}>
      <Home />
    </context.Provider>
  );
};

export default App;
