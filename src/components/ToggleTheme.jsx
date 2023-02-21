import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import styles from "./ToogleTheme.module.css";
import { BsMoon, BsSunFill } from "react-icons/bs";

export default function ToggleTheme() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <button //
      className={styles.toggle}
      onClick={handleClick}
    >
      {darkMode ? <BsSunFill style={{ color: "white" }} /> : <BsMoon />}
    </button>
  );
}
