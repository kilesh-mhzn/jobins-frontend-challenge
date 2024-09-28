import { InfoPanelTitle } from "@components/commons/Info-panel-title/Info-panel-title.component";
import { InfoPanelValue } from "@components/commons/Info-panel-value/Info-panel-value.component";
import { TotalSalesCard } from "@components/total-sales-card/total-sales-card.component";
import { Avatar } from "@ui/avatar/avatar";
import { Card } from "@ui/card/card.component";
import FlexLayout from "@ui/layout/flex";
import ProgressBar from "@ui/progress-bar/progress-bar.component";
import React from "react";
import styles from "./dashboard.module.css";

const TotalProfitPanel = () => {
  return (
    <Card>
      <InfoPanelTitle name="Total Profit" subtitle="Last 7 days" />
      <InfoPanelValue
        value="500k"
        change={{ status: "decreased", value: "12%" }}
      />
    </Card>
  );
};

const SalesByCountry = () => {
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
        status: "increased",
      },
    },
    {
      name: "Australia",
      flag: "https://flagsapi.com/AU/flat/64.png",

      sales: "30K",
      change: {
        value: "55.8",
        status: "increased",
      },
    },
  ];
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
                {item.change.value}
              </div>
            </FlexLayout>
          </div>
        ))}
      </Card>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <FlexLayout gap="1rem" alignItems="stretch">
      <TotalSalesCard />
      <TotalProfitPanel />
      <SalesByCountry />
    </FlexLayout>
  );
};

export default Dashboard;
