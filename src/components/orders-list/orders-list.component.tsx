import { Table } from "@ui/table/table";
import { orderColumns } from "./orderColumns";
import { useOrderData } from "@hooks/useOrderData";
import { useState } from "react";
import { Search } from "@components/commons/search-input/searchInput";
import { Section } from "@ui/layout/section/section";
import FlexLayout from "@ui/layout/flex";
import { Button } from "@ui/button/button";
import { IconChevrondown } from "@ui/icons/icons";

const Orders = () => {
  const { data, loading, error, setSearchTerm } = useOrderData();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePerPageChange = (newPerPage: number) => {
    setItemsPerPage(newPerPage);
    setCurrentPage(1);
  };

  const Filters = () => {
    return (
      <Section gap="medium">
        <FlexLayout justifyContent="space-between">
          <FlexLayout gap={"1rem"}>
            <Button
              color="white"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            >
              Status: All
              <IconChevrondown />
            </Button>
            <Search
              placeholder={"Search"}
              onChange={(value) => setSearchTerm(value)}
            />
          </FlexLayout>
          <Button
            color="white"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            Filter by date range
            <IconChevrondown />
          </Button>
        </FlexLayout>
      </Section>
    );
  };
  return (
    <>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      <Filters />
      <Table
        cols={orderColumns()}
        data={data}
        page={currentPage}
        perPage={itemsPerPage}
        onPageChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
      />
    </>
  );
};

export default Orders;
