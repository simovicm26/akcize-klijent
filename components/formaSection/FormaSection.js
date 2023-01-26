/* eslint-disable react/display-name */
import React, { useEffect } from "react";
import Input from "../UI/Input";
import styles from "./FormaSection.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-web";
import Animation from "../../public/loading.json";
import Animation2 from "../../public/success.json";

const FormaSection = React.forwardRef((props, ref) => {
  const [input, setInput] = useState("");
  const [phone, setPhone] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firma, setFirma] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const [animation, setAnimation] = useState(null);
  const container = useRef(null);
  const container2 = useRef(null);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleFirma(e) {
    setFirma(e.target.value);
  }

  function handleIme(e) {
    setName(e.target.value);
  }

  function handleFocus() {
    setIsFocused((prevState) => !prevState);
  }

  function handleSubmit(e) {
    const data = {
      email: email,
      name: name,
      nameFirme: firma,
      telefon: `+${phone.toString()}`,
      poruka: input,
    };

    animation.play();
    setIsLoading(true);

    emailjs
      .send("service_k4fzhnl", "contact_form", data, "PtDTzFowowY5pCYVm")
      .then(
        (result) => {
          setIsComplete(true);
          console.log("success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.preventDefault();
  }

  useEffect(() => {
    setAnimation(
      Lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        animationData: Animation,
        loop: true,
        autoplay: true,
      })
    );
    Lottie.loadAnimation({
      container: container2.current,
      renderer: "svg",
      animationData: Animation2,
      loop: false,
      autoplay: true,
    });
  }, [isLoading, isComplete]);

  return (
    <div ref={ref} className={styles.FormaSection}>
      <h2>Nemate sta da izgubite</h2>
      <p>
        Kontaktirajte me kako bismo već danas započeli saradnju I obezbedili
        dodatna sredstva za vašu firmu u najkracem mogucem roku
      </p>
      <div className={styles.contact}>
        <p>Kontakt telefon:</p>
        <p href="">064 122 555 1</p>
        <p>Email adresa:</p>
        <p href="">vladankasimovic1975@gmail.com</p>
      </div>
      {isLoading ? (
        isComplete ? (
          <div className={styles.success}>
            <div className={styles.anim} ref={container2}></div>
            <p>
              Hvala na poslatoj poruci. Kontaktiraću vas u najkraćem mogućem
              roku sa odgovorom na vaš zahtev!
            </p>
          </div>
        ) : (
          <div ref={container}></div>
        )
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label=" Ime firme:"
            required={false}
            handleState={handleFirma}
            state={firma}
            type="text"
            id="ime-firme"
          />
          <div className={styles.labelContainer}>
            <label htmlFor="phone" className={styles.label}>
              *Vaš broj telefona:
            </label>
            <PhoneInput
              onFocus={handleFocus}
              onBlur={handleFocus}
              inputProps={{ required: true, name: "phone", id: "phone" }}
              placeholder=""
              country={"rs"}
              value={phone}
              regions={"europe"}
              onChange={(phone) => setPhone(phone)}
              containerStyle={{
                width: "100%",
                borderRadius: 11,
                height: "3rem",
                // overflow: "hidden",
                backgroundColor: isFocused ? "#eff7ff" : "#FFF0F0",
                border: isFocused ? "1px solid #97d5ff" : "1px solid #c1c1c1",
              }}
              inputStyle={{
                backgroundColor: "transparent",
                fontSize: 18,
                fontFamily: "Montserrat",
                paddingTop: 10,
                paddingBottom: 10,
                color: "#353535",
                paddingLeft: 70,
                fontWeight: 500,
                height: "100%",
                border: "none",
              }}
              buttonStyle={{
                backgroundColor: "transparent",
                padding: 10,
                border: "none",
                borderRight: "1px solid #c1c1c1",
              }}
              dropdownStyle={{ backgroundColor: "#FFF0F0", maxWidth: 250 }}
            />
          </div>
          <Input
            required={true}
            label="*Vaše ime i prezime:"
            handleState={handleIme}
            state={name}
            type="text"
            id="ime"
          />
          <Input
            required={true}
            label="*Vaša email adresa:"
            handleState={handleEmail}
            state={email}
            type="email"
            id="email"
          />
          <div className={styles.textarea}>
            <label htmlFor="poruka">Vaša poruka:</label>
            <textarea
              required={true}
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
      )}
    </div>
  );
});

export default FormaSection;
