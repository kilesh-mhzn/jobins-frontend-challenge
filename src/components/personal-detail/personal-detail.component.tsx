import {
  InfoDataGrid,
  InfoPanelTitle,
} from "@components/commons/info-panel/info-panel.component";
import useUserDetails from "@hooks/useUserDetails";
import { Avatar } from "@ui/avatar/avatar";
import { Card } from "@ui/card/card.component";
import FlexLayout from "@ui/layout/flex";
import { Section } from "@ui/layout/section/section";
import TabNav from "@ui/tabs/tab-nav/tab-nav.component";
import { Text } from "@ui/typography/text.component";

interface Tab {
  label: string;
}

interface PersonalDetailProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
  tabs: Tab[];
}

const PersonalDetailComponent: React.FC<PersonalDetailProps> = ({
  activeTab,
  setActiveTab,
  tabs,
}) => {
  const { userDetails } = useUserDetails();
  if (!userDetails) {
    return (
      <Card>
        <div>
          <p>Something went wrong loading metrics</p>
        </div>
      </Card>
    );
  }
  const { personalInformation, shippingAddress, orderSummary } = userDetails;

  return (
    <Card>
      <FlexLayout justifyContent="space-between">
        <Section>
          <FlexLayout gap={"1rem"} alignItems="center" height={"100%"}>
            <Avatar size="xl" name={personalInformation.name} />
            <InfoPanelTitle
              name={personalInformation.name}
              subtitle={personalInformation.email}
            />
          </FlexLayout>
        </Section>

        <Section border="left">
          <FlexLayout flexDirection="column" gap={".5rem"}>
            <Text color="muted" size="sm" weight="semibold">
              PERSONAL DETAIL
            </Text>
            <div>
              <InfoDataGrid title={"Contact Number"}>
                {personalInformation.contactNumber}
              </InfoDataGrid>
              <InfoDataGrid title={"Date of Birth"}>
                {personalInformation.dateOfBirth}
              </InfoDataGrid>
              <InfoDataGrid title={"Member Since"}>
                {personalInformation.memberSince}
              </InfoDataGrid>
            </div>
          </FlexLayout>
        </Section>

        <Section border="left">
          <FlexLayout flexDirection="column" gap={".5rem"}>
            <Text color="muted" size="sm" weight="semibold">
              SHIPPING ADDRESS
            </Text>
            <Text size="xs">
              {`${shippingAddress.address} 
              ${shippingAddress.city} 
              ${shippingAddress.city} 
              ${shippingAddress.zipCode}`}
            </Text>
            <FlexLayout gap={"4rem"}>
              <InfoPanelTitle
                name={orderSummary.totalOrder}
                subtitle={"Total Order"}
              />
              <InfoPanelTitle
                name={orderSummary.completed}
                subtitle={"Completed"}
              />
              <InfoPanelTitle
                name={orderSummary.canceled}
                subtitle={"Cancelled"}
              />
            </FlexLayout>
          </FlexLayout>
        </Section>
      </FlexLayout>
      <TabNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    </Card>
  );
};

export default PersonalDetailComponent;
