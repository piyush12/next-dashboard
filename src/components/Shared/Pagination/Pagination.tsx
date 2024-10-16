import React from "react";
import Select from "@/components/Shared/Select/Select";
import Button from "@/components/Shared/Button";
import Flex from "@/components/Shared/Flex";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";

function Pagination() {
  return (
    <Flex
      align="center"
      gap="6"
      className="text-light-primary dark:text-dark-primary"
    >
      <p className="text-light-primary/40  dark:text-dark-primary/40">
        Page 2 of 50
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
            >
              <IconChevronsLeft stroke={1} />
            </Button>
          </li>
          <li>
            <Button
              aria-label="Page 1"
              className="bg-light-primary/10  dark:bg-dark-primary/10"
            >
              <IconChevronLeft stroke={1} />
            </Button>
          </li>
          <li>
            <Button
              aria-label="Page 1"
              className="bg-light-primary/10  dark:bg-dark-primary/10"
            >
              1
            </Button>
          </li>
          <li>
            <Button aria-label="Page 2" colors="primary">
              2
            </Button>
          </li>
          <li>
            <Button
              aria-label="Page 3"
              className="bg-light-primary/10  dark:bg-dark-primary/10"
            >
              3
            </Button>
          </li>
          <li>
            <Button
              aria-label="Page Next"
              className="bg-light-primary/10  dark:bg-dark-primary/10"
            >
              <IconChevronRight stroke={1} />
            </Button>
          </li>
          <li>
            <Button
              aria-label="Page Next"
              className="bg-light-primary/10  dark:bg-dark-primary/10"
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
