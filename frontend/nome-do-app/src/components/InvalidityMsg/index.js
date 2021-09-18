import React from "react";
import "./styles.css";

const invalidityMsg = (props) => {
  return (
    <div className="invalidityMsg">
      <small>{props.msg}</small>
    </div>
  );
};

export default invalidityMsg;