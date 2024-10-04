import { IconChevrondown, IconChevronUp, IconDash } from "@ui/icons/icons";
import styles from "./sales-by-country.module.css";
import ProgressBar from "@ui/progress-bar/progress-bar.component";
import { InfoPanelTitle } from "@components/commons/info-panel/info-panel.component";
import { Avatar } from "@ui/avatar/avatar";
import { Card } from "@ui/card/card.component";
import FlexLayout from "@ui/layout/flex";
import { CountryMetric } from "@services/dashboard.service";

interface SalesByCountryProps {
  data?: CountryMetric[];
}

export const SalesByCountry: React.FC<SalesByCountryProps> = ({ data }) => {
  if (!data) {
    return (
      <Card>
        <div className={styles["total-sales-card__loading"]}>
          <p>Something went wrong loading metrics</p>
        </div>
      </Card>
    );
  }
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
          <div key={item.country} className={styles["sales-by-country"]}>
            <FlexLayout gap="1rem" alignItems="center">
              <div className={styles["sales-by-country__avatar"]}>
                <Avatar img={item.flag} size="lg" name={item.country} />
              </div>

              <div className={styles["sales-by-country__info"]}>
                <InfoPanelTitle name={item.value} subtitle={item.country} />
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
