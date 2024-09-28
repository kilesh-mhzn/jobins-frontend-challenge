import React from "react";
import styles from "./progress-bar.module.css";

interface ProgressBarProps {
  value: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className={`${styles["progress-bar"]}`}>
      <div
        className={styles["progress-bar__fill"]}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;
