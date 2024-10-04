import React from "react";
import styles from "./badge.module.css";
import classnames from "classnames";

export type BadgeType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";
type BadgeProps = {
  label: string;
  type?: BadgeType;
  ghost?: boolean;
};
export const Badge = ({ label, type = "success", ghost }: BadgeProps) => {
  return (
    <div
      className={classnames(styles.badge, styles[`badge--${type}`], {
        [styles["badge--ghost"]]: ghost,
      })}
    >
      {label}
    </div>
  );
};
