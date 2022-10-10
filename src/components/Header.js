import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["left-achors"]}>
        <Link to="/" className={styles.anchor}>
          Home
        </Link>
      </div>

      <h1 className={styles.title}>To do List🦸</h1>
      <div className={styles["right-achors"]}>
        <Link to="/login" className={styles.anchor}>
          Login
        </Link>
        <Link to="/signup" className={styles.anchor}>
          Signup
        </Link>
      </div>
    </header>
  );
}

export default Header;
