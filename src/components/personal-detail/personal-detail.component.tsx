import {
  InfoDataGrid,
  InfoPanelTitle,
} from "@components/commons/info-panel/info-panel.component";
import { Avatar } from "@ui/avatar/avatar";
import { Card } from "@ui/card/card.component";
import FlexLayout from "@ui/layout/flex";
import { Section } from "@ui/layout/section/section";
import { Text } from "@ui/typography/text.component";

const PersonalDetailComponent = () => {
  return (
    <Card>
      <FlexLayout justifyContent="space-between">
        <Section>
          <FlexLayout gap={"1rem"} alignItems="center" height={"100%"}>
            <Avatar size="xl" name={"AK"} />
            <InfoPanelTitle name="John Doe" subtitle={"JohnDoe@gmail.com"} />
          </FlexLayout>
        </Section>

        <Section border="left">
          <FlexLayout flexDirection="column" gap={".5rem"}>
            <Text color="muted" size="sm" weight="semibold">
              PERSONAL DETAIL
            </Text>
            <div>
              <InfoDataGrid title={"Contact Number"}>
                (201) 555-104
              </InfoDataGrid>
              <InfoDataGrid title={"Date of Birth"}>1 Jan, 1985</InfoDataGrid>
              <InfoDataGrid title={"Member Since"}>3 March,2023</InfoDataGrid>
            </div>
          </FlexLayout>
        </Section>

        <Section border="left">
          <FlexLayout flexDirection="column" gap={".5rem"}>
            <Text color="muted" size="sm" weight="semibold">
              SHIPPING ADDRESS
            </Text>
            <Text size="xs">3517 W. Gray St. Utica, Pennsylvania 57867</Text>
            <FlexLayout gap={"4rem"}>
              <InfoPanelTitle name="150" subtitle={"Total Order"} />
              <InfoPanelTitle name="150" subtitle={"Completed"} />
              <InfoPanelTitle name="150" subtitle={"Cancelled"} />
            </FlexLayout>
          </FlexLayout>
        </Section>
      </FlexLayout>
    </Card>
  );
};

export default PersonalDetailComponent;
