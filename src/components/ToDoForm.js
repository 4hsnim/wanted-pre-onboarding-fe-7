import React, { useRef } from "react";
import axios from "axios";
import styles from "../styles/ToDoForm.module.css";
import Button from "./elements/Button";

function ToDoForm(props) {
  const enteredToDoRef = useRef();
  const access_token = localStorage.getItem("access_token");
  const submitHandler = props.onSubmit.bind(null, enteredToDoRef);
  return (
    <div className={styles.control}>
      <label htmlFor="todo">할일</label>
      <input id="todo" type="text" ref={enteredToDoRef} />
      <Button onClick={submitHandler}>추가하기</Button>
    </div>
  );
}

export default ToDoForm;
