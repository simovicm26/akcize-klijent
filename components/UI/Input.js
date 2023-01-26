import React, { useState } from "react";
import styles from "./Input.module.css";

function Input(props) {
  // const [input, setInput] = useState("");
  // function handleChange(e) {
  //   console.log(input);
  //   setInput(e.target.value);
  // }

  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        required={props.required}
        value={props.state}
        onChange={props.handleState}
        id={props.id}
        name={props.id}
        type={props.type}
        pattern={props.pattern}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
