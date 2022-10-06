import React, { useReducer } from "react";

let initialState = {
  isLogin: false,
  username: "",
  password: "",
};

const actionType = {
  LOGIN: "LOGIN",
  FIELD: "FIELD",
};

function reducer(state, action) {
  switch (action.type) {
    case actionType.LOGIN:
      return { ...state, isLogin: !state.isLogin };
    case actionType.FIELD:
      return { ...state, [action.fieldName]: action.payload };
    default:
      return state;
  }
}

const FormWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Form with use reducer....</h2>
      <p>
        <b>{state.isLogin ? "Success" : "Failed"}</b>
      </p>
      <p>
        <b>Username: {state.username}</b>
      </p>
      <p>
        <b>Password: {state.password}</b>
      </p>
      <button
        type="button"
        onClick={() => dispatch({ type: actionType.LOGIN })}
      >
        Login
      </button>
      <input
        type="text"
        name="username"
        autoComplete="off"
        onChange={(e) => {
          dispatch({
            type: actionType.FIELD,
            fieldName: "username",
            payload: e.target.value,
          });
        }}
      />
      <input
        type="password"
        name="password"
        autoComplete="off"
        onChange={(e) => {
          dispatch({
            type: actionType.FIELD,
            fieldName: "password",
            payload: e.target.value,
          });
        }}
      />
    </>
  );
};
export default FormWithUseReducer;
