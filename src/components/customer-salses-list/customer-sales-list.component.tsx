import { Table } from "@ui/table/table";
import { customerColumns } from "./customerColumns";
import { useUserData } from "@hooks/useUserData";
import { useState } from "react";

const Customers = () => {
  const { data, loading, error } = useUserData();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePerPageChange = (newPerPage: number) => {
    setItemsPerPage(newPerPage);
    setCurrentPage(1);
  };
  return (
    <>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      <Table
        cols={customerColumns()}
        data={data}
        page={currentPage}
        perPage={itemsPerPage}
        onPageChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
      />
    </>
  );
};

export default Customers;
