import Customers from "@components/customer-salses-list/customer-sales-list.component";
import PersonalDetailComponent from "@components/personal-detail/personal-detail.component";
import { SalesByCountry } from "@components/sales-by-country/sales-by-country.component";
import { TotalProfitPanel } from "@components/total-profit-card/total-profit-card.component";
import { TotalSalesCard } from "@components/total-sales-card/total-sales-card.component";
import FlexLayout from "@ui/layout/flex";
import { Section } from "@ui/layout/section/section";
import TabContent from "@ui/tabs/tab-content/tab-content.component";
import React, { useState } from "react";

const tabs = [
  { label: "All Orders", content: <Customers /> },
  { label: "Completed", content: <div>Completed Tabs</div> },
  { label: "Cancelled", content: <div>Cancelled Tabs</div> },
];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Section gap="large">
        <FlexLayout gap="1rem" alignItems="stretch">
          <TotalSalesCard />
          <TotalProfitPanel />
          <SalesByCountry />
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
  );
};

export default Dashboard;
