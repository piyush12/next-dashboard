import { Ticket } from "@prisma/client";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Badge } from "@/components/Shared/Badge";
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
import Text from "@/components/Shared/Text";
import { Colors } from "@/types/global";

import { deleteTicket } from "../../actions/delete-ticket";

const BADGE_COLOR: {
  [key: string]: Colors;
} = {
  DONE: "success",
  IN_PROGRESS: "primary",
  OPEN: "info",
};

function TicketCard({
  ticket,
  isDetail = false,
}: {
  ticket: Ticket;
  isDetail?: boolean;
}) {
  async function handleDelete() {
    "use server";
    await deleteTicket(ticket.id);
    redirect("/tickets");
  }

  return (
    <Card className="w-1/3">
      <CardHeader>
        <CardTitle>{ticket.title}</CardTitle>
        <CardSubTitle>
          <Badge color={BADGE_COLOR[ticket.status] as Colors}>
            {ticket.status}
          </Badge>
        </CardSubTitle>
      </CardHeader>
      <CardContent>
        <Text as="p" variant="body1">
          {ticket.content}
        </Text>
      </CardContent>
      <CardFooter className="flex justify-end">
        {!isDetail ? (
          <Link href={`tickets/${ticket.id}`}>
            <Button variant="default" color="primary" type="button">
              View
            </Button>
          </Link>
        ) : (
          <Flex gap="4">
            <Link href={`/tickets/${ticket.id}/edit`}>
              <Button variant="default" color="primary" type="button">
                Edit
              </Button>
            </Link>

            <Button
              variant="default"
              color="error"
              type="button"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Flex>
        )}
      </CardFooter>
    </Card>
  );
}

export default TicketCard;
