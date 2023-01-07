import React, { useState } from "react";
import styles from "./Input.module.css";

function Input(props) {
  const [input, setInput] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  function handleChange(e) {
    console.log(input);
    setInput(e.target.value);
    if (e.target.value !== "") {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }

  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={isFilled ? styles.isFilled : undefined}
        value={input}
        onChange={handleChange}
        id={props.id}
        type={props.type}
        pattern={props.pattern}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
