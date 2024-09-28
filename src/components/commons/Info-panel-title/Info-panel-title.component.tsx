import styles from "./info-panel-title.module.css";

type InfoPanelTitleProps = {
  name: string;
  subtitle: string;
};
export const InfoPanelTitle = ({ name, subtitle }: InfoPanelTitleProps) => {
  return (
    <div className={styles["info-panel-title__container"]}>
      <h2 className={styles["info-panel-title__name"]}>{name}</h2>
      <p className={styles["info-panel-title__subtitle"]}>{subtitle}</p>
    </div>
  );
};
