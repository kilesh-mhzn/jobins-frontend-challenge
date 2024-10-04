import { STATUS } from "@services/customer.service";
import { Badge, BadgeType } from "@ui/badge/badge";

type CustomerActivityStatus = "COMPLETED" | "BLOCKED" | "PENDING";

type StatusBadgeProps = {
  type: CustomerActivityStatus;
};

export const StatusBadge = ({ type }: StatusBadgeProps) => {
  const badgeType: Record<CustomerActivityStatus, BadgeType> = {
    COMPLETED: "success",
    BLOCKED: "danger",
    PENDING: "warning",
  };

  const label = STATUS[type];
  const badgeTypeValue = badgeType[type];

  return <Badge ghost label={label} type={badgeTypeValue} />;
};
