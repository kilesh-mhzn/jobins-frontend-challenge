import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./button.module.css";

type ButtonSize = "small" | "medium" | "large";

const ButtonSizeMap: Record<ButtonSize, string> = {
  small: styles["button--small"],
  medium: styles["button--medium"],
  large: styles["button--large"],
};

type ButtonColor = "primary" | "secondary" | "white" | "none";

const ButtonColorMap: Record<ButtonColor, string> = {
  primary: styles["button--primary"],
  secondary: styles["button--secondary"],
  white: styles["button--white"],
  none: "",
};
type ButtonProps = {
  children?: ReactNode;
  onClick: () => void;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ghost?: boolean;
  outline?: boolean;
  color?: ButtonColor;
};

export const Button = ({
  children,
  onClick,
  size = "medium",
  type = "button",
  disabled = false,
  ghost,
  color = "none",
  outline = false,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        ButtonSizeMap[size],
        ButtonColorMap[color],
        {
          [styles["button--ghost"]]: ghost && !outline,
          [styles["button--outline"]]: outline,
        }
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
