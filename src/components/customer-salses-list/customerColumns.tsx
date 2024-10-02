import { Customer } from "@components/services/customer.service";
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
      render: (rowData) => rowData.status,
    },
  ];
};
