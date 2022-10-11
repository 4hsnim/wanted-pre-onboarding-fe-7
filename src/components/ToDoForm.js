import React, { useRef } from "react";
import axios from "axios";
import styles from "../styles/ToDoForm.module.css";

function ToDoForm() {
  const enteredToDoRef = useRef();
  const access_token = localStorage.getItem("access_token");

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredTodoValue = enteredToDoRef.current.value;
    await axios({
      url: "https://pre-onboarding-selection-task.shop/todos",
      method: "post",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      data: { todo: enteredTodoValue },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="todo">할일</label>
        <input id="todo" type="text" ref={enteredToDoRef} />
        <button>추가하기</button>
      </div>
    </form>
  );
}

export default ToDoForm;
