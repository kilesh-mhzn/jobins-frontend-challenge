import { FC, PropsWithChildren } from "react";
import styles from "./text.module.css";
import classNames from "classnames";

type TypographySize =
  | "xxs"
  | "xs"
  | "sm"
  | "base"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl";
const TypographySizeMap: Record<TypographySize, string> = {
  xxs: styles["typography--size-xxs"],
  xs: styles["typography--size-xs"],
  sm: styles["typography--size-sm"],
  base: styles["typography--size-base"],
  md: styles["typography--size-md"],
  lg: styles["typography--size-lg"],
  xl: styles["typography--size-xl"],
  "2xl": styles["typography--size-2xl"],
  "3xl": styles["typography--size-3xl"],
  "4xl": styles["typography--size-4xl"],
  "5xl": styles["typography--size-5xl"],
  "6xl": styles["typography--size-6xl"],
  "7xl": styles["typography--size-7xl"],
  "8xl": styles["typography--size-8xl"],
};

type Color = "primary" | "black" | "muted";
const ColorMap: Record<Color, string> = {
  primary: styles["typography--color-primary"],
  black: styles["typography--color-black"],
  muted: styles["typography--color-muted"],
};

type FontWeight = "light" | "default" | "semibold" | "bold" | "bolder";

const FontWeightMap: Record<FontWeight, string> = {
  light: styles["typography--weight-light"],
  default: styles["typography--weight-default"],
  semibold: styles["typography--weight-semibold"],
  bold: styles["typography--weight-bold"],
  bolder: styles["typography--weight-bolder"],
};

type TypographyProps = {
  color?: Color;
  size?: TypographySize;
  weight?: FontWeight;
};

export const Text: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  color = "black",
  size = "base",
  weight = "default",
}) => {
  const textClass = classNames(
    styles["typography__text"],
    TypographySizeMap[size],
    ColorMap[color],
    FontWeightMap[weight]
  );

  return <span className={textClass}>{children}</span>;
};
