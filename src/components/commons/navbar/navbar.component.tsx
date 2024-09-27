import React from "react";
import styles from "./navbar.module.css";
import { IconBell } from "@ui/icons/icons";
import { Avatar } from "@ui/avatar/avatar";

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
        <Avatar
          isActive={true}
          size="lg"
          name="John Doe"
          img="https://picsum.photos/200/300"
        />
      </div>
    </nav>
  );
};

export default Navbar;
