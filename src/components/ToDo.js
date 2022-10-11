import React, { useRef } from "react";
import styles from "../styles/ToDo.module.css";
import Button from "./elements/Button";

function ToDo(props) {
  const enteredToDoRef = useRef();
  const isCompleted = props.isCompleted;
  const completeHandler = props.onComplete.bind(
    null,
    props.id,
    enteredToDoRef,
    isCompleted
  );
  const deleteHandler = props.onDelete.bind(null, props.id);

  return (
    <div className={styles.wrapper}>
      <input
        defaultValue={props.data.todo}
        disabled={true}
        type="text"
        className={
          isCompleted ? `${styles.todo} ${styles.iscompleted}` : styles.todo
        }
        ref={enteredToDoRef}
      />
      {isCompleted ? (
        <Button className={styles.button} onClick={completeHandler}>
          완료취소
        </Button>
      ) : (
        <Button className={styles.button} onClick={completeHandler}>
          완료
        </Button>
      )}
      <Button className={styles.button}>수정</Button>
      <Button className={styles.button} onClick={deleteHandler}>
        삭제
      </Button>
    </div>
  );
}

export default ToDo;
