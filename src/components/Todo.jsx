import React, { useContext, useState } from "react";
import styles from "./Todo.module.css";
import { BsTrash } from "react-icons/bs";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Todo({ title, id, selectedTab, dispatch }) {
  const { darkMode } = useContext(DarkModeContext);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = () => {
    dispatch({ type: "deleted", id });
  };

  return (
    <li
      className={darkMode ? styles.checkList : styles.checkList}
      style={{
        display:
          selectedTab === "All"
            ? ""
            : selectedTab === "Active" && !isCompleted
            ? ""
            : selectedTab === "Completed" && isCompleted
            ? ""
            : "none",
      }}
    >
      <span className={darkMode ? styles.dark : styles.light}>
        <input
          type="checkbox"
          name={id}
          id={id}
          checked={isCompleted}
          onChange={() => setIsCompleted((prev) => !prev)}
        />
        &nbsp;
        <label htmlFor={id} className={isCompleted ? styles.completed : ""}>
          {title}
        </label>
      </span>
      <div className={styles.button} onClick={handleClick}>
        <BsTrash />
      </div>
    </li>
  );
}
