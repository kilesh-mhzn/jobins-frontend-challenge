import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./button.module.css";

type ButtonSize = "small" | "medium" | "large";
const ButtonSizeMap: Record<ButtonSize, string> = {
  small: styles["button--small"],
  medium: styles["button--medium"],
  large: styles["button--large"],
};

type ButtonProps = {
  children?: ReactNode;
  onClick: () => void;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ghost?: boolean;
  outline?: boolean;
};

export const Button = ({
  children,
  onClick,
  size = "medium",
  type = "button",
  disabled = false,
  ghost,
  outline = false,
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, ButtonSizeMap[size], {
        [styles["button--ghost"]]: ghost && !outline,
        [styles["button--outline"]]: outline,
      })}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
