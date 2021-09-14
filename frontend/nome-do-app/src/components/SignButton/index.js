import React from "react";
import "./styles.css";

const SignButtom = (props) => {
  return (
    <button
    style={{backgroundColor: props.backgroundColor, color: props.color}}
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