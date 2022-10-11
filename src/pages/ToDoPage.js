import React from "react";
import styles from "../styles/ToDoPage.module.css";
import ToDo from "../components/ToDo";
import ToDoForm from "../components/ToDoForm";

function ToDoPage() {
  return (
    <>
      <ToDoForm />
      <div className={styles.wrapper}>
        <h2>할일 목록</h2>

        <ToDo />
        <ToDo />
        <ToDo />
        <ToDo />
      </div>
    </>
  );
}

export default ToDoPage;
