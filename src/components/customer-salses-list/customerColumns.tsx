import { Customer } from "@components/services/customer.service";
import { StatusBadge } from "@components/status-badge/status-badge";
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
        return <button>View Detail</button>;
      },
      customWidth: "120",
    },
  ];
};
