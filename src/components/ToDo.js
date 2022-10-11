import React from "react";
import styles from "../styles/ToDo.module.css";

function ToDo(props) {
  return (
    <div className={styles.wrapper}>
      <input
        defaultValue={props.data.todo}
        type="text"
        className={styles.todo}
      />

      <button className={styles.button}>완료</button>
      <button className={styles.button}>수정</button>
      <button className={styles.button}>삭제</button>
    </div>
  );
}

export default ToDo;
