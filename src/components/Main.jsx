import React, { useContext } from "react";
import Todo from "./Todo";
import styles from "./Main.module.css";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Main({ selectedTab, todos, dispatch }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <main className={darkMode ? styles.main : styles.mainLight}>
      {todos.map((todo) => (
        <ul key={todo.id}>
          <Todo
            title={todo.title}
            id={todo.id}
            selectedTab={selectedTab}
            dispatch={dispatch}
          />
        </ul>
      ))}
    </main>
  );
}
