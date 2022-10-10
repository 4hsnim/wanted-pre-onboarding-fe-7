import { useState } from "react";
import styles from "../styles/Form.module.css";

function Form(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isTouchedEmail, setIsTouchedEmail] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isTouchedPassword, setIsTouchedPassword] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setIsTouchedEmail(true);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordBlurHandler = () => {
    setIsTouchedPassword(true);
  };

  const emailIsValid = enteredEmail.includes("@");
  const emailHasError = !emailIsValid && isTouchedEmail;

  const passwordIsValid = enteredPassword.trim().length >= 8;
  const passwordHasError = !passwordIsValid && isTouchedPassword;

  const formIsValid = emailIsValid && passwordIsValid;

  const submitHandler = (event) => {
    console.log(enteredEmail, enteredPassword);
    event.preventDefault();
    props.onSubmit({ email: enteredEmail, password: enteredPassword });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2>{props.title}</h2>
        <div className={styles.control}>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="text"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>
        {emailHasError && (
          <p className={styles.invalid}>이메일 형식이 올바르지 않습니다.</p>
        )}
        <div className={styles.control}>
          <label htmlFor="password">패스워드</label>
          <input
            id="password"
            type="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <p className={styles.invalid}>비밀번호는 8자 이상입니다.</p>
          )}
        </div>

        <button disabled={!formIsValid}>제출하기</button>
      </form>
    </div>
  );
}

export default Form;
