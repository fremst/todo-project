import React from "react";
import { useContext, useEffect, useReducer, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { DarkModeContext } from "./context/DarkModeContext";
import todoReducer from "./reducer/todo-reducer";
import styles from "./TodoApp.module.css";

export default function TodoApp() {
  const { darkMode } = useContext(DarkModeContext);

  const [selectedTab, setSelectedTab] = useState("All");
  const [todos, dispatch] = useReducer(todoReducer, []);
  useEffect(() => {
    console.log("loaded");
    dispatch({ type: "loaded" });
  }, []);

  return (
    <div className={darkMode ? styles.container : styles.containerLight}>
      {/* TODO: container 어디에 추가하는지 확인 */}
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Main selectedTab={selectedTab} todos={todos} dispatch={dispatch} />
      <Footer dispatch={dispatch} />
    </div>
  );
}
