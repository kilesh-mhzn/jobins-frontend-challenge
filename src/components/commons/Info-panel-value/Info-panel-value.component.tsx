import { IconArrowDown, IconArrowUp } from "@ui/icons/icons";
import styles from "./info-panel-value.module.css";

type InfoPanelValueProps = {
  value: string;
  change: {
    value: string;
    status: "increased" | "decreased" | "balanced";
  };
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

const getDynamicStyle = (status: InfoPanelValueProps["change"]["status"]) => {
  return styles[`info-panel-value--${status}`];
};

export const InfoPanelValue = ({ value, change }: InfoPanelValueProps) => {
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
