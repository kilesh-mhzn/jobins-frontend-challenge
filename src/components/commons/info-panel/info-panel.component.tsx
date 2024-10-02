import { IconArrowDown, IconArrowUp } from "@ui/icons/icons";
import styles from "./info-panel.module.css";

type InfoPanelTitleProps = {
  name: string;
  subtitle: string;
};

type InfoPanelValueProps = {
  value: string;
  change: {
    value: string;
    status: "increased" | "decreased" | "balanced";
  };
};

export const InfoPanelTitle = ({ name, subtitle }: InfoPanelTitleProps) => {
  return (
    <div className={styles["info-panel-title__container"]}>
      <h2 className={styles["info-panel-title__name"]}>{name}</h2>
      <p className={styles["info-panel-title__subtitle"]}>{subtitle}</p>
    </div>
  );
};

export const InfoPanelValue = ({ value, change }: InfoPanelValueProps) => {
  const getDynamicStyle = (status: InfoPanelValueProps["change"]["status"]) => {
    return styles[`info-panel-value--${status}`];
  };

  const getIcon = (status: InfoPanelValueProps["change"]["status"]) => {
    switch (status) {
      case "increased":
        return <IconArrowUp />;
      case "decreased":
        return <IconArrowDown />;
      default:
        return null;
    }
  };
  const dynamicStyle = getDynamicStyle(change.status);
  const icon = getIcon(change.status);

  return (
    <div className={styles["info-panel-value__container"]}>
      <h2 className={styles["info-panel-value__name"]}>{value}</h2>
      <p className={styles["info-panel-value__subtitle"]}>
        <span
          className={`${styles["info-panel-value__change"]} ${dynamicStyle}`}
        >
          {icon}
          {change.value}
        </span>
        &nbsp; vs last 7 days
      </p>
    </div>
  );
};
