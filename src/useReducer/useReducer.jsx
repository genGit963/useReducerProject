import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

const ACTIONS = {

  INCREMENT: "increment",
  DECREMENT: "decrement",
  MULtwo: "mulTwo",
  DIVtwo: "divTwo",
  SUBtwo: "subTwo",
  ADDtwo: "addTwo"
};

function reducer(state, action) {

  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };

    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };

    case ACTIONS.DIVtwo:
      return { count: state.count / 2 };

    case ACTIONS.MULtwo:
      return { count: state.count * 2 };

    case ACTIONS.ADDtwo:
      return { count: state.count + 2 };

    case ACTIONS.SUBtwo:
      return { count: state.count - 2 };

    default:
      return state;
  }
}

function ApplyUseReducer() {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function plusOne() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function minusOne() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function divByTwo(){
    dispatch({type: ACTIONS.DIVtwo});
  }

  function mulByTwo(){
    dispatch({type: ACTIONS.MULtwo});
  }

  function plusTwo(){
    dispatch({type: ACTIONS.ADDtwo});
  }

  function minusTwo(){
    dispatch({type:ACTIONS.SUBtwo});
  }

  return (
    <div className="use-reducer" style={{ margin: "50px 35%", display:"flex", flexDirection:"row", border:"3px solid", height:"50px", width:"242px" }}>

      <button onClick={plusTwo}> +2 </button>
      <button onClick={plusOne}> +1 </button>

      <span><button onClick={divByTwo}> /2 </button></span>

      <h3>{state.count}</h3>

      <span><button onClick={mulByTwo}> *2 </button></span>

      <button onClick={minusOne}> -1 </button>
      <button onClick={minusTwo}> -2 </button>

    </div>
  );


}


export default ApplyUseReducer;