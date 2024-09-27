import React from "react";
import styles from "./navbar.module.css";
import { IconBell } from "@ui/layout/icons/icons";

const NotificationButton: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className={styles["navbar__notification"]}>
      <IconBell />
      <span className={styles["navbar__notification-counter"]}>{count}</span>
    </div>
  );
};

const Navbar: React.FC = () => {
  const notificationCount = 5;

  return (
    <nav className={styles["navbar"]}>
      <h1 className={styles["navbar__title"]}>Dashboard</h1>
      <div className={styles["navbar__actions"]}>
        <NotificationButton count={notificationCount} />
      </div>
    </nav>
  );
};

export default Navbar;
