import React from "react";
import styles from "./Tabs.module.css";

export default function Tabs({ selectedTab, setSelectedTab }) {
  const tabs = ["All", "Active", "Completed"];
  const handleClick = (e) => {
    const selectedTab = e.target.dataset.name;
    setSelectedTab(selectedTab);
  };

  return (
    <ul className={styles.tabs}>
      {tabs.map((tab) => (
        <li
          key={tab}
          className={selectedTab === tab ? styles.active : ""}
          onClick={(e) => handleClick(e)}
          data-name={tab}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
}
