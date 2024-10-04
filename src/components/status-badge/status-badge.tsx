import { STATUS } from "@models/orders.model";
import { Badge, BadgeType } from "@ui/badge/badge";

type CustomerActivityStatus = "COMPLETED" | "CANCELLED" | "PENDING";

type StatusBadgeProps = {
  type: CustomerActivityStatus;
};

export const StatusBadge = ({ type }: StatusBadgeProps) => {
  const badgeType: Record<CustomerActivityStatus, BadgeType> = {
    COMPLETED: "success",
    CANCELLED: "danger",
    PENDING: "warning",
  };

  const label = STATUS[type];
  const badgeTypeValue = badgeType[type];

  return <Badge ghost label={label} type={badgeTypeValue} />;
};
