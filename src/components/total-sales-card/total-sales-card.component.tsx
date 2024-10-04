import { Card } from "@ui/card/card.component";
import dashboardImage from "@assets/dashboard_1.png";
import FlexLayout from "@ui/layout/flex";
import styles from "./total-sales-card.module.css"; // Importing module styles
import {
  InfoPanelTitle,
  InfoPanelValue,
} from "@components/commons/info-panel/info-panel.component";
import { TotalSalesAndCosts } from "@services/dashboard.service";

interface TotalSalesCardProps {
  data?: TotalSalesAndCosts;
}

export const TotalSalesCard: React.FC<TotalSalesCardProps> = ({ data }) => {
  if (!data) {
    return (
      <Card>
        <div className={styles["total-sales-card__loading"]}>
          <p>Something went wrong loading metrics</p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <FlexLayout gap={"2rem"} height={"100%"} alignItems="center">
        <figure className={styles["total-sales-card__image-container"]}>
          <img
            src={dashboardImage}
            alt="Total Sales Card Image"
            className={styles["total-sales-card__image"]}
          />
        </figure>
        <div className={styles["total-sales-card__info"]}>
          <InfoPanelTitle name="Total Sales & Cost" subtitle="Last 7 days" />
          <InfoPanelValue value={data.amount} change={data.change} />
        </div>
      </FlexLayout>
    </Card>
  );
};
