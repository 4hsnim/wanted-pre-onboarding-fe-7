import React from "react";
import styles from "../styles/ToDo.module.css";

function ToDo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.todo}>
        <span>밥먹기</span>
      </div>
      <button className={styles.button}>완료</button>
      <button className={styles.button}>수정</button>
      <button className={styles.button}>삭제</button>
    </div>
  );
}

export default ToDo;