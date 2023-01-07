import React from "react";
import modules from "./Button.module.css";

function Button({ type, text, onClick, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${modules.button} ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
