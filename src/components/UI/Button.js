import React from "react";
import classes from "./Button.module.css";

//type will use the props of type if undefined will use a standard 'button'
const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};

export default Button;
