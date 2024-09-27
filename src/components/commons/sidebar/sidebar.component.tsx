import { sidebarData } from "./sidebar-data";
import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <ul role="list" className={styles["sidebar-list"]}>
        {sidebarData.map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive }) => (isActive ? styles["active-nav"] : "")}
            to={item.path}
          >
            <li className={styles["list-item"]}>{item.title}</li>
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};
