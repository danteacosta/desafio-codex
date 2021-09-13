import React from "react";
import "./styles.css";

const SignButtom = (props) => {
  return (
    <button 
    type={props.type}
    onClick={props.onClick} 
    onSubmit={props.onSubmit}
    disabled={props.disabled}
    id="signButton">
      {props.text}
    </button>
  );
};

export default SignButtom;