import { TotalSalesCard } from "@components/total-sales-card/total-sales-card.component";
import FlexLayout from "@ui/layout/flex";
import Customers from "@components/customer-salses-list/customer-sales-list.component";
import PersonalDetailComponent from "@components/personal-detail/personal-detail.component";
import { SalesByCountry } from "@components/sales-by-country/sales-by-country.component";
import { TotalProfitPanel } from "@components/total-profit-card/total-profit-card.component";
import { Section } from "@ui/layout/section/section";
import React from "react";

const Dashboard: React.FC = () => {
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
        <PersonalDetailComponent />
      </Section>
      <Section gap="large">
        <Customers />
      </Section>
    </>
  );
};

export default Dashboard;
