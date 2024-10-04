import { IconLogo, IconIndentIncrease } from "@ui/icons/icons";
import { sidebarData, MenuItemWithGroup, MenuItem } from "./sidebar-data";
import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import classnames from "classnames"; 

const logo_alt =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAeFBMVEVHcEz////////////////////////////////////////////t7e2FhYWqqqoFBQX+8OrzZgX4spPDw8Pi4uL79/XyVgD4qIVISEi9vb3T09P5vKIeHh794dWZmZksLCz1jFf6x7L81MNvb2/2mW5cXFxqamr0fz8Oy4gNAAAADHRSTlMAM4XE5/9h7RjfPz4pFiaJAAABIklEQVR4AWySVQLDIBTAqGQu1F0n3P+E01em+Q0aUBbH9XzwPddR38zmWOazD7VY8sFyoSwrflj/dZvtBoCVrMk7u/0OAJ4r2/3QQQjRtO/dzXgSJ+g0gzzmyf3Mcodkn0OiKfbldKPb3RG2OwgqdvUkcZSLEEc0aUVbFzQaAFd5CF17kyFtt6MfAPCULy6pt4xBxrZrCTMAfAWMGtjUh5s8cpfVU/KQAxB3J4ag59xtCSfpg86AssupAsO9kBlkWQ8wIrMggA06TeRALjDeq3UdST8C9LKq+4zQj0R1zZMqmCJIPjMQSdMs0JLPhs/MCJAMgalsePtkOgsCEwTHhvAoT/b52DoBuEcEFv+/UJWOsFLC+tu+ueuwJU3CiRpvdgAAZAEZGcfC7tYAAAAASUVORK5CYII=";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const renderMenuItem = ({ path, title, icon: Icon }: MenuItem) => (
    <NavLink
      key={path}
      className={({ isActive }) =>
        classnames(styles.sidebar__nav, {
          [styles["sidebar__nav--active"]]: isActive,
        })
      }
      to={path}
    >
      <li title={title} className={styles["sidebar__list-item"]}>
        {Icon && <Icon />}
        {!isCollapsed && title}
      </li>
    </NavLink>
  );

  const renderGroup = (item: MenuItemWithGroup, index: number) => (
    <li
      key={index}
      className={styles.sidebar__group}
      style={isCollapsed ? collapsedStyle : undefined}
    >
      <h6 className={styles["sidebar__group-title"]}>{item.group}</h6>
      {item.items.map(renderMenuItem)}
    </li>
  );

  const collapsedStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <aside
      className={classnames(styles.sidebar, {
        [styles["sidebar--collapsed"]]: isCollapsed,
      })}
    >
      <header className={styles["sidebar__header"]}>
        {isCollapsed ? <img src={logo_alt} alt="Logo" /> : <IconLogo />}
        <button
          className={classnames(styles["sidebar__header-button"], {
            [styles["sidebar__header-button--rotated"]]: isCollapsed,
          })}
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          <IconIndentIncrease />
        </button>
      </header>
      <ul role="list" className={styles["sidebar__list"]}>
        {sidebarData.map((item, index) =>
          "group" in item
            ? renderGroup(item as MenuItemWithGroup, index)
            : renderMenuItem(item as MenuItem)
        )}
      </ul>
    </aside>
  );
};
