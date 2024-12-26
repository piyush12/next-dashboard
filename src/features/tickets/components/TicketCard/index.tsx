import React from "react";

import { Ticket } from "@prisma/client";
import Link from "next/link";

import { Badge } from "@/components/Shared/Badge";
import Button from "@/components/Shared/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubTitle,
  CardContent,
  CardFooter,
} from "@/components/Shared/Card";
import Text from "@/components/Shared/Text";

function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <Card className="w-1/3">
      <CardHeader>
        <CardTitle>{ticket.title}</CardTitle>
        <CardSubTitle>
          <Badge>{ticket.status}</Badge>
        </CardSubTitle>
      </CardHeader>
      <CardContent>
        <Text as="p" variant="body1">
          {ticket.content}
        </Text>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href={`tickets/${ticket.id}`}>
          <Button variant="default" color="primary" type="button">
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default TicketCard;
