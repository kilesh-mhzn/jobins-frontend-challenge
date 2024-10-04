import React from "react";
import styles from "./pagination.module.css";
import { IconLeftChevron, IconRightChevron } from "@ui/icons/icons";
import FlexLayout from "@ui/layout/flex";
import { Text } from "@ui/typography/text.component";
import { Button } from "@ui/button/button";

type PaginationProps = {
  perPage: number;
  page: number;
  totalItems: number;
  onPageChange: (newPage: number) => void;
  onPerPageChange: (newPerPage: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  perPage,
  page,
  totalItems,
  onPageChange,
  onPerPageChange,
}) => {
  const totalPage = Math.ceil(totalItems / perPage);

  return (
    <FlexLayout
      gap={"1rem"}
      alignItems="center"
      margin={"1rem 0px"}
      padding={"0 0.625rem"}
      justifyContent="space-between"
    >
      <FlexLayout gap={"5px"} alignItems="center">
        <Text color="muted" size="sm">
          Showing
        </Text>
        <select
          value={perPage}
          onChange={(e) => onPerPageChange(Number(e.target.value))}
          className={styles["pagination__select"]}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <div>
          <Text color="muted" size="sm">
            <span>{(page - 1) * perPage + 1}</span> -{" "}
            <span>{Math.min(page * perPage, totalItems)}</span> of
            <span> {totalItems} </span>
          </Text>
        </div>
      </FlexLayout>
      <FlexLayout gap={".75rem"}>
        <Button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          ghost
        >
          <IconLeftChevron size="2em" />
        </Button>
        {Array.from({ length: totalPage }, (_, index) => (
          <Button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            ghost={page !== index + 1}
          >
            <div style={{ padding: "0 8px" }}>{index + 1}</div>
          </Button>
        ))}
        <Button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPage}
          ghost
        >
          <IconRightChevron size="2em" />
        </Button>
      </FlexLayout>
    </FlexLayout>
  );
};
