import React, { useEffect, useReducer } from "react";
import "./App.css";
import Calculate from "./calculate";

export const NumberContext = React.createContext();

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "discrement":
      return state - 1;
    case "reset":
      return initialValue;

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    console.log("Render oldu");
  }, [state]);

  return (
    <>
      <NumberContext.Provider value={{ state, dispatch }}>
        <Calculate />
      </NumberContext.Provider>
    </>
  );
}

export default App;
