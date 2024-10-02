// Section.tsx
import React, { FC, PropsWithChildren } from "react";
import styles from "./section.module.css";
import classNames from "classnames";

type GapType = "small" | "medium" | "large" | "none";

const GapMap: Record<GapType, string> = {
  small: styles["section--gap-small"],
  medium: styles["section--gap-medium"],
  large: styles["section--gap-large"],
  none: "",
};

type BorderType = "left" | "right" | "top" | "bottom" | "none";

type SectionProps = {
  gap?: GapType;
  border?: BorderType;
};

const BorderMap: Record<BorderType, string> = {
  left: styles["section--border-left"],
  right: styles["section--border-right"],
  top: styles["section--border-top"],
  bottom: styles["section--border-bottom"],
  none: "",
};

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  gap = "none",
  border = "none", 
}) => {
  const sectionClass = classNames(
    styles["section"],
    GapMap[gap],
    BorderMap[border]
  );

  return <section className={sectionClass}>{children}</section>;
};
