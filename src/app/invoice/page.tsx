"use client";
import { Avatar } from "@/components/Shared/Avatar";
import { Badge } from "@/components/Shared/Badge";
import Box from "@/components/Shared/Box";
import Button from "@/components/Shared/Button";
import Flex from "@/components/Shared/Flex";
import Label from "@/components/Shared/Label";
import { Pagination } from "@/components/Shared/Pagination";
import Paper from "@/components/Shared/Paper";
import Select from "@/components/Shared/Select/Select";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Shared/Table";
import Text from "@/components/Shared/Text";
import TextField from "@/components/Shared/TextField";
import {
  IconDeviceLaptop,
  IconSun,
  IconMoonStars,
  IconSearch,
  IconCheck,
  IconChevronRight,
  IconChevronLeft,
  IconChevronsRight,
  IconChevronsLeft,
} from "@tabler/icons-react";
import React from "react";

type IMode = "light" | "dark" | "system";
type IModeData = {
  [key in IMode]: { label: string; icon: React.ReactNode };
};

const modeData: IModeData = {
  light: { label: "Light", icon: <IconSun /> },
  dark: { label: "Dark", icon: <IconMoonStars /> },
  system: { label: "System", icon: <IconDeviceLaptop /> },
};

function Invoice() {
  const [mode, setMode] = React.useState<IMode>("system");
  return (
    <Box>
      <Flex className="p-4">
        {/* TOP MENU */}
        <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
          <Flex align="center" justify="between">
            <Flex align="center" direction="row-reverse" className="w-10/12">
              <TextField type="text" placeholder="Search..." fullWidth>
                <IconSearch
                  stroke={2}
                  className="text-light-primary dark:text-dark-primary"
                />
              </TextField>
            </Flex>
            <Select
              onChange={(value: IMode) => {
                setMode(value);
              }}
              value="light"
            >
              <Select.Trigger chevron={false}>
                {modeData[mode].icon}
              </Select.Trigger>
              <Select.Content>
                {Object.keys(modeData).map((key) => {
                  return (
                    <Select.Item value={key} active={mode == key} key={key}>
                      {modeData[key as IMode].icon}{" "}
                      {modeData[key as IMode].label}
                    </Select.Item>
                  );
                })}
              </Select.Content>
            </Select>
          </Flex>
        </Paper>
      </Flex>
      {/* Table LIST  */}

      <Flex className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Issue Date</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-purple-500">#4910</TableCell>
              <TableCell>
                <Avatar size="8" radius="full" color="success">
                  <IconCheck stroke="1" />
                </Avatar>
              </TableCell>
              <TableCell>johdoe@gmail.com</TableCell>
              <TableCell>200</TableCell>
              <TableCell>johdoe@gmail.com</TableCell>
              <TableCell>
                <Badge className="rounded-md bg-success-500 bg-opacity-15  text-success-500">
                  Paid
                </Badge>
              </TableCell>
              <TableCell>200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>done</TableCell>
              <TableCell>johdoe@gmail.com</TableCell>
              <TableCell>200</TableCell>
              <TableCell>johdoe@gmail.com</TableCell>
              <TableCell>$200</TableCell>
              <TableCell>200</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow showBorder={false}>
              <TableCell colSpan={7} className="pr-0">
                <Flex align="center" justify="end" gap="6">
                  <Pagination />
                </Flex>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Flex>

      <Flex className="p-4">
        <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
          <Box className="dark:border-b-dark-divider border-b-light-divider mb-8 border-b-[1px] pb-4 pt-4">
            <Text as="p">Add Invoice</Text>
          </Box>

          <Flex gap="6">
            <Box className="w-2/4">
              <Flex direction="column" gap="5">
                <Label htmlFor="name">Biller Name</Label>
                <TextField
                  type="text"
                  id="name"
                  name="name"
                  fullWidth
                ></TextField>
              </Flex>
            </Box>
            <Box className="w-2/4">
              <Flex direction="column" gap="5">
                <Label htmlFor="name">Biller Email</Label>
                <TextField
                  type="text"
                  id="name"
                  name="name"
                  fullWidth
                ></TextField>
              </Flex>
            </Box>
          </Flex>

          <Flex gap="6" className="mt-8">
            <Box className="w-2/4">
              <Flex direction="column" gap="5">
                <Label htmlFor="name">Value</Label>
                <TextField
                  type="text"
                  id="name"
                  name="name"
                  fullWidth
                ></TextField>
              </Flex>
            </Box>
            <Box className="w-2/4">
              <Flex direction="column" gap="5">
                <Label htmlFor="name">Description</Label>
                <TextField
                  type="text"
                  id="name"
                  name="name"
                  fullWidth
                ></TextField>
              </Flex>
            </Box>
          </Flex>

          <Flex gap="6" className="mb-8 mt-8">
            <Button colors="primary">Submit</Button>
          </Flex>
        </Paper>
      </Flex>
    </Box>
  );
}

export default Invoice;
