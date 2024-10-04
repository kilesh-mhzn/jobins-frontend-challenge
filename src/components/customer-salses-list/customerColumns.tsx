import { Customer } from "@components/services/customer.service";
import { StatusBadge } from "@components/status-badge/status-badge";
import { Button } from "@ui/button/button";
import { Column } from "@ui/table/table";

export const customerColumns = (): Column<Customer>[] => {
  return [
    {
      id: "id",
      title: "Id",
      render: (rowData) => rowData.id,
    },
    {
      id: "customerName",
      title: "Customer",
      render: (rowData) => rowData.customerName,
    },
    {
      id: "date",
      title: "Date",
      render: (rowData) => rowData.date,
    },
    {
      id: "method",
      title: "Method",
      render: (rowData) => rowData.method,
    },
    {
      id: "status",
      title: "Status",
      render: (rowData) => {
        return <StatusBadge type={rowData.status} />;
      },
    },
    {
      id: "action",
      title: "Action",
      render: () => {
        return (
          <Button
            ghost
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            View Detail
          </Button>
        );
      },
      customWidth: "150",
    },
  ];
};
