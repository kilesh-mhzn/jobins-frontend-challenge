import styles from "./avatar.module.css";
import classNames from "classnames";
import { extractInitials } from "@utils";

type AvatarSize = "lg" | "md" | "xs" | "sm";
const AvatarSizeMap: Record<AvatarSize, string> = {
  lg: styles["avatar--size-lg"],
  md: styles["avatar--size-md"],
  xs: styles["avatar--size-xs"],
  sm: styles["avatar--size-sm"],
};
type AvatarProps = {
  name: string;
  img?: string;
  size?: AvatarSize;
  isActive?: boolean;
};

export const Avatar = ({ name, img, size = "md", isActive }: AvatarProps) => {
  return (
    <div title={name} className={styles.avatar}>
      {img ? (
        <img
          className={classNames(styles.avatar__image, AvatarSizeMap[size])} // Updated class name
          src={img}
          alt="user_img"
        />
      ) : (
        <div className={classNames(styles.avatar__image, AvatarSizeMap[size])}>
          {" "}
          // Updated class name
          {extractInitials(name)}
        </div>
      )}
      {isActive && <div className={styles.avatar__status}></div>}
    </div>
  );
};
