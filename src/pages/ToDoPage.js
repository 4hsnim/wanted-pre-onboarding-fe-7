import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/ToDoPage.module.css";
import ToDo from "../components/ToDo";
import ToDoForm from "../components/ToDoForm";
import axios from "axios";

function ToDoPage() {
  const [toDoList, setToDoList] = useState();
  const access_token = localStorage.getItem("access_token");
  const getTodoList = useCallback(async () => {
    await axios({
      url: "https://pre-onboarding-selection-task.shop/todos",
      method: "get",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        setToDoList(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [access_token]);

  const submitHandler = async (newtodo) => {
    const enteredTodoValue = newtodo.current.value;
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
        setToDoList((prevData) => [...prevData, response.data]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const completeHandler = async (id, updatedToDo, isCompleted) => {
    const enteredTodoValue = updatedToDo.current.value;
    await axios({
      url: `https://pre-onboarding-selection-task.shop/todos/${id}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      data: { todo: enteredTodoValue, isCompleted: !isCompleted },
    })
      .then((response) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const deleteHandler = async (id) => {
    await axios({
      url: `https://pre-onboarding-selection-task.shop/todos/${id}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => {
        setToDoList((prevData) => prevData.filter((data) => data.id !== id));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return (
    <>
      <ToDoForm onSubmit={submitHandler} />
      <div className={styles.wrapper}>
        <h2>할일 목록</h2>
        {toDoList &&
          toDoList.map((todo) => (
            <ToDo
              data={todo}
              key={todo.id}
              id={todo.id}
              isCompleted={todo.isCompleted}
              onComplete={completeHandler}
              onDelete={deleteHandler}
            />
          ))}
      </div>
    </>
  );
}

export default ToDoPage;
