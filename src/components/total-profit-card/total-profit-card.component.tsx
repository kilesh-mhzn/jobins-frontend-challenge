import {
  InfoPanelTitle,
  InfoPanelValue,
} from "@components/commons/info-panel/info-panel.component";
import { Card } from "@ui/card/card.component";
import FlexLayout from "@ui/layout/flex";
import yen from "@assets/yen.png";
import styles from "./total-profit-card.module.css";

export const TotalProfitPanel = () => {
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
          value="500k"
          change={{ status: "decreased", value: "12%" }}
        />
      </div>
    </Card>
  );
};
