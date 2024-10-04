import {
  InfoPanelTitle,
  InfoPanelValue,
} from "@components/commons/info-panel/info-panel.component";
import { Card } from "@ui/card/card.component";
import FlexLayout from "@ui/layout/flex";
import yen from "@assets/yen.png";
import styles from "./total-profit-card.module.css";
import React from "react";
import { TotalProfit } from "@models/dashboard-metrics.model";
import { formatAmount } from "@utils";

interface TotalProfitPanelProps {
  data?: TotalProfit;
}
export const TotalProfitPanel: React.FC<TotalProfitPanelProps> = ({ data }) => {
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
      <div className={styles["total-profit-card"]}>
        <FlexLayout gap={"1rem"}>
          <figure>
            <img src={yen} alt="Yen" />
          </figure>
          <InfoPanelTitle name="Total Profit" subtitle="Last 7 days" />
        </FlexLayout>
        <InfoPanelValue
          value={`$${formatAmount(data.amount)}`}
          change={{ status: data?.change.status, value: data.change.value }}
        />
      </div>
    </Card>
  );
};
