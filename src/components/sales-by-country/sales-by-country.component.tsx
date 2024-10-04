import { IconChevrondown, IconChevronUp, IconDash } from "@ui/icons/icons";
import styles from "./sales-by-country.module.css";
import ProgressBar from "@ui/progress-bar/progress-bar.component";
import { InfoPanelTitle } from "@components/commons/info-panel/info-panel.component";
import { Avatar } from "@ui/avatar/avatar";
import { Card } from "@ui/card/card.component";
import FlexLayout from "@ui/layout/flex";

export const SalesByCountry = () => {
  const data = [
    {
      name: "United States",
      flag: "https://flagsapi.com/US/flat/64.png",
      sales: "30K",
      change: {
        value: "35.8",
        status: "increased",
      },
    },
    {
      name: "Brazil",
      flag: "https://flagsapi.com/BR/flat/64.png",

      sales: "30K",
      change: {
        value: "25.8",
        status: "decreased",
      },
    },
    {
      name: "Australia",
      flag: "https://flagsapi.com/AU/flat/64.png",

      sales: "30K",
      change: {
        value: "55.8",
        status: "balanced",
      },
    },
  ];
  const getDynamicStyle = (status: string) => {
    return styles[`info-panel-value--${status}`];
  };

  const getIcon = (status: string) => {
    switch (status) {
      case "increased":
        return <IconChevronUp />;
      case "decreased":
        return <IconChevrondown />;
      default:
        return <IconDash />;
    }
  };
  return (
    <div style={{ flexGrow: "1" }}>
      <Card>
        {data.map((item) => (
          <div key={item.name} className={styles["sales-by-country"]}>
            <FlexLayout gap="1rem" alignItems="center">
              <div className={styles["sales-by-country__avatar"]}>
                <Avatar img={item.flag} size="lg" name={item.name} />
              </div>

              <div className={styles["sales-by-country__info"]}>
                <InfoPanelTitle name={item.sales} subtitle={item.name} />
              </div>

              <ProgressBar value={item.change.value} />
              <div className={styles["sales-by-country__change"]}>
                <span
                  className={`${
                    styles["info-panel-value__change"]
                  } ${getDynamicStyle(item.change.status)}`}
                >
                  {getIcon(item.change.status)}
                  {item.change.value}
                </span>
              </div>
            </FlexLayout>
          </div>
        ))}
      </Card>
    </div>
  );
};
