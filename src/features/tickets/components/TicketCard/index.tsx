import { Prisma, User } from "@prisma/client";
import { IconDotsVertical } from "@tabler/icons-react";
import Link from "next/link";

import { Badge } from "@/components/Shared/Badge";
import Box from "@/components/Shared/Box";
import Button from "@/components/Shared/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "@/components/Shared/Card";
import Flex from "@/components/Shared/Flex";
import Select from "@/components/Shared/Select/Select";
import Text from "@/components/Shared/Text";
import { isOwner } from "@/features/auth/utils/is-owner";
import { generateRoutePath, ROUTES } from "@/path";
import { Colors } from "@/types/global";

import { updateTicketStatus } from "../../actions/update-ticket-status";

import DeleteButton from "./DeleteButton";

type IStatus = "DONE" | "IN_PROGRESS" | "OPEN";

const BADGE_COLOR: Record<IStatus, Colors> = {
  DONE: "success",
  IN_PROGRESS: "primary",
  OPEN: "info",
};

async function TicketCard({
  ticket,
  isDetail = false,
  user,
}: {
  ticket: Prisma.TicketGetPayload<{
    include: {
      user: {
        select: {
          username: true;
        };
      };
    };
  }>;
  isDetail?: boolean;
  user?: User | null;
}) {
  const isTicketOwner = isOwner(user, ticket);

  async function handleChangeStatus(status: IStatus) {
    "use server";
    await updateTicketStatus(ticket.id, status);
  }

  return (
    <Card className="w-full max-w-full">
      <CardHeader className="flex-row justify-between">
        <Box>
          <CardTitle>{ticket.title}</CardTitle>
          {!isDetail && (
            <CardSubTitle>
              <Badge color={BADGE_COLOR[ticket.status] as Colors}>
                {ticket.status}
              </Badge>
            </CardSubTitle>
          )}
        </Box>
        {isTicketOwner && isDetail && (
          <Select onChange={handleChangeStatus} value="light">
            <Select.Trigger chevron={false} className="!pr-0">
              <IconDotsVertical stroke={2} />
            </Select.Trigger>
            <Select.Content>
              <Select.Item active={ticket.status === "OPEN"} value="OPEN">
                OPEN
              </Select.Item>
              <Select.Item
                active={ticket.status === "IN_PROGRESS"}
                value="IN_PROGRESS"
              >
                IN_PROGRESS
              </Select.Item>
              <Select.Item active={ticket.status === "DONE"} value="DONE">
                DONE
              </Select.Item>
            </Select.Content>
          </Select>
        )}
      </CardHeader>
      <CardContent>
        <Text as="p" variant="body1">
          {ticket.content}
        </Text>
        <Flex justify="between" className="mt-5">
          <Text as="p" variant="body1" color="warning">
            {ticket.deadline} by {ticket.user.username}
          </Text>
          <Text as="p" variant="body1" color="info">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(ticket.bounty / 100)}
          </Text>
        </Flex>
      </CardContent>
      <CardFooter className="flex justify-end">
        {!isDetail ? (
          <Link
            href={generateRoutePath(ROUTES.TICKETS_DETAIL, { id: ticket.id })}
          >
            <Button variant="default" color="primary" type="button">
              View
            </Button>
          </Link>
        ) : isTicketOwner ? (
          <Flex gap="4">
            <Link
              href={generateRoutePath(ROUTES.TICKETS_EDIT, { id: ticket.id })}
            >
              <Button variant="default" color="primary" type="button">
                Edit
              </Button>
            </Link>
            <DeleteButton id={ticket.id} />
          </Flex>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export default TicketCard;
