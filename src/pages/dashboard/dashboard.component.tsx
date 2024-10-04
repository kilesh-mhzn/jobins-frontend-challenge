import PersonalDetailComponent from "@components/personal-detail/personal-detail.component";
import { SalesByCountry } from "@components/sales-by-country/sales-by-country.component";
import { TotalProfitPanel } from "@components/total-profit-card/total-profit-card.component";
import { TotalSalesCard } from "@components/total-sales-card/total-sales-card.component";
import FlexLayout from "@ui/layout/flex";
import { Section } from "@ui/layout/section/section";
import TabContent from "@ui/tabs/tab-content/tab-content.component";
import React, { useState } from "react";
import useDashboardMetrics from "@hooks/useDashboardMetrics";
import Orders from "@components/orders-list/orders-list.component";

const tabs = [
  { label: "All Orders", content: <Orders /> },
  { label: "Completed", content: <div>Completed Tabs</div> },
  { label: "Cancelled", content: <div>Cancelled Tabs</div> },
];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { metrics, isFetchingMetrics } = useDashboardMetrics();

  return (
    <>
      {isFetchingMetrics ? (
        <p>Loading data...</p>
      ) : (
        <>
          <Section gap="large">
            <FlexLayout gap="1rem" alignItems="stretch" flexWrap="wrap">
              <TotalSalesCard data={metrics?.totalSalesAndCosts} />
              <TotalProfitPanel data={metrics?.totalProfit} />
              <SalesByCountry data={metrics?.countryMetrics} />
            </FlexLayout>
          </Section>
          <Section gap="large">
            <PersonalDetailComponent
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={tabs}
            />
          </Section>
          <Section gap="large">
            <TabContent tabs={tabs} activeTab={activeTab} />
          </Section>
        </>
      )}
    </>
  );
};

export default Dashboard;
