import { InfoPanelTitle } from "@components/commons/Info-panel-title/Info-panel-title.component";
import { InfoPanelValue } from "@components/commons/Info-panel-value/Info-panel-value.component";
import { Card } from "@ui/card/card.component";
import dashboardImage from "@assets/dashboard_1.png";
import FlexLayout from "@ui/layout/flex";
import styles from "./total-sales-card.module.css"; // Importing module styles

export const TotalSalesCard = () => {
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

          <InfoPanelValue
            value="300k"
            change={{ status: "increased", value: "21%" }}
          />
        </div>
      </FlexLayout>
    </Card>
  );
};
