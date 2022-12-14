import React, { useState, useRef } from "react";
import styles from "../styles/ToDo.module.css";
import Button from "./elements/Button";

function ToDo(props) {
  const enteredToDoRef = useRef();
  const [updateMode, setUpdateMode] = useState();
  const isCompleted = props.isCompleted;
  const enteredToDo = props.data.todo;
  const completeHandler = props.onComplete.bind(
    null,
    props.id,
    enteredToDo,
    isCompleted
  );
  const updateHandler = props.onUpdate.bind(
    null,
    props.id,
    enteredToDoRef,
    isCompleted,
    setUpdateMode
  );

  const deleteHandler = props.onDelete.bind(null, props.id);
  const goToUpdateMode = () => {
    setUpdateMode(true);
  };

  const cancelUpdateMode = props.cancelUpdateMode.bind(
    null,
    setUpdateMode,
    props.id
  );
  // const cancelUpdateMode = () => {
  //   setUpdateMode(false);
  //   props.setIsUpdated(!props.isUpdated);
  // };

  return (
    <div className={styles.wrapper}>
      {/* {!updateMode ? (
        <input
          defaultValue={props.data.todo}
          disabled
          type="text"
          className={
            isCompleted ? `${styles.todo} ${styles.iscompleted}` : styles.todo
          }
          ref={enteredToDoRef}
        />
      ) : (
        <input
          defaultValue={props.data.todo}
          autoFocus
          type="text"
          className={
            isCompleted ? `${styles.todo} ${styles.iscompleted}` : styles.todo
          }
          ref={enteredToDoRef}
        />
      )} */}

      {!updateMode ? (
        <div
          className={
            isCompleted ? `${styles.todo} ${styles.iscompleted}` : styles.todo
          }
        >
          {props.data.todo}
        </div>
      ) : (
        <input
          defaultValue={props.data.todo}
          autoFocus
          disabled={!updateMode}
          type="text"
          className={
            isCompleted ? `${styles.todo} ${styles.iscompleted}` : styles.todo
          }
          ref={enteredToDoRef}
        />
      )}

      {isCompleted ? (
        <Button className={styles.button} onClick={completeHandler}>
          ????????????
        </Button>
      ) : (
        <Button className={styles.button} onClick={completeHandler}>
          ??????
        </Button>
      )}
      {!updateMode ? (
        <Button className={styles.button} onClick={goToUpdateMode}>
          ??????
        </Button>
      ) : (
        <Button className={styles.button} onClick={updateHandler}>
          ????????????
        </Button>
      )}

      {!updateMode ? (
        <Button className={styles.button} onClick={deleteHandler}>
          ??????
        </Button>
      ) : (
        <Button className={styles.button} onClick={cancelUpdateMode}>
          ????????????
        </Button>
      )}
    </div>
  );
}

export default ToDo;
