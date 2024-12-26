"use client";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";

import Button from "@/components/Shared/Button";
import Flex from "@/components/Shared/Flex";
import Select from "@/components/Shared/Select/Select";

import { usePagination } from "./usePagination";

type IPaginationProps = {
  page: number;
  total: number;
  itemPerPage?: number;
  onChange: (page: number) => void;
};

function Pagination({ page, total, itemPerPage = 5 }: IPaginationProps) {
  const paginate = Math.ceil(total / itemPerPage);

  const paginateItems = usePagination({
    total: paginate,
    page: 2,
    initialPage: 1,
    showControls: true,
  });
  const renderPagination = () => {
    return paginateItems.range.map((item, index) => {
      switch (item) {
        case "prev":
          return (
            <li key={item}>
              <Button
                aria-label="Page 1"
                className="bg-light-primary/10  dark:bg-dark-primary/10"
                onClick={paginateItems.previous}
              >
                <IconChevronLeft stroke={1} />
              </Button>
            </li>
          );
        case "next":
          return (
            <li key={item}>
              <Button
                aria-label="Page Next"
                className="bg-light-primary/10  dark:bg-dark-primary/10"
                onClick={paginateItems.next}
              >
                <IconChevronRight stroke={1} />
              </Button>
            </li>
          );
        case "dots":
          return (
            <li key={`Page ${item}-${index}`}>
              <Button
                aria-label={`Page ${item}`}
                className="bg-light-primary/10 dark:bg-dark-primary/10"
              >
                ...
              </Button>
            </li>
          );
        default:
          return (
            <li key={item}>
              <Button
                aria-label={`Page ${item}`}
                className={` ${paginateItems.activePage === item ? "bg-purple-500" : "bg-light-primary/10 dark:bg-dark-primary/10"}`}
                onClick={() => paginateItems.setPage(+item)}
              >
                {item}
              </Button>
            </li>
          );
      }
    });
  };

  return (
    <Flex
      align="center"
      gap="6"
      className="text-light-primary dark:text-dark-primary"
    >
      <p className="text-light-primary/40  dark:text-dark-primary/40">
        Page {page} of {total}
      </p>
      <label>Show</label>
      <Select value="2">
        <Select.Trigger className="border-2 border-light-secondary dark:border-dark-secondary">
          10
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="2">2</Select.Item>
          <Select.Item value="3">3</Select.Item>
          <Select.Item value="4">4</Select.Item>
        </Select.Content>
      </Select>

      <nav aria-label="Pagination">
        <ul className="flex gap-2">
          <li>
            <Button
              aria-label="Page 1"
              className="bg-light-primary/10  dark:bg-dark-primary/10"
              onClick={paginateItems.first}
            >
              <IconChevronsLeft stroke={1} />
            </Button>
          </li>

          {renderPagination()}

          <li>
            <Button
              aria-label="Page Next"
              className="bg-light-primary/10  dark:bg-dark-primary/10"
              onClick={paginateItems.last}
            >
              <IconChevronsRight stroke={1} />
            </Button>
          </li>
        </ul>
      </nav>
    </Flex>
  );
}

export default Pagination;
