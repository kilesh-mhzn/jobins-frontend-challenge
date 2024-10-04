import React from "react";
import classNames from "classnames";
import styles from "../tabs.module.css";

interface Tab {
  label: string;
}

interface TabNavProps {
  tabs: Tab[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

const TabNav: React.FC<TabNavProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className={styles.tabs__header}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(index)}
          className={classNames(styles.tabs__tab, {
            [styles["tabs__tab--active"]]: activeTab === index,
          })}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNav;
