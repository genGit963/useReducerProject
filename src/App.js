import React from "react";

import "./app.css";
import ApplyUseReducer from "./useReducer/useReducer";

function App(){


  return(
    <div className="App">
      <h1 style={{textAlign:"center", textDecoration:"underline"}}>Learning about useReducer Hook </h1>

      <ApplyUseReducer />

    </div>
  );
}

export default App;