import React from "react";
import Tabs from "./Tabs";
import ToggleTheme from "./ToggleTheme";
import styles from "./Header.module.css";

export default function Header({ selectedTab, setSelectedTab }) {
  return (
    <header className={styles.header}>
      <ToggleTheme />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </header>
  );
}
