import React, { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer({ dispatch }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleClick = () => {
    dispatch({ type: "added", title: todoTitle });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoTitle("");
  };
  const handleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  return (
    <footer className={styles.footer}>
      <form className={styles.inputBox} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="add"
          id="add"
          placeholder="Add Todo"
          value={todoTitle}
          onChange={handleChange}
        />
        <button className={styles.button} onClick={handleClick}>
          Add
        </button>
      </form>
    </footer>
  );
}
