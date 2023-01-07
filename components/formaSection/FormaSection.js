import React from "react";
import Input from "../UI/Input";
import styles from "./FormaSection.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const FormaSection = React.forwardRef((props, ref) => {
  const [input, setInput] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  function handleChange(e) {
    setInput(e.target.value);
    if (e.target.value !== "") {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("lol");
  }

  // run this function from an event handler or an effect to execute scroll

  return (
    <div ref={ref} className={styles.FormaSection}>
      <h2>Nemate sta da izgubite</h2>
      <p>
        Kontaktirajte me kako bismo već danas započeli saradnju I obezbedili
        dodatna sredstva za vašu firmu u najkracem mogucem roku
      </p>
      <form onSubmit={handleSubmit}>
        <Input label="*Ime firme:" type="text" id="ime-firme" />
        <Input label="*Vaš broj telefona:" type="text" id="telefon" />
        <Input label="Vaše ime i prezime:" type="number" id="ime" />
        <Input label="*Vaša email adresa:" type="email" id="email" />
        <div className={styles.textarea}>
          <label htmlFor="poruka">Vaša poruka:</label>
          <textarea
            className={isFilled ? styles.isFilled : undefined}
            onChange={handleChange}
            value={input}
            name="poruka"
            id="poruka"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <Button type="submit" text="Posalji"></Button>
      </form>
    </div>
  );
});

export default FormaSection;
