import React from "react";

import AppBreadCrumb from "@/components/AppBreadcrumb/app-breadcrumb";
import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import Text from "@/components/Shared/Text";
import { getAuth } from "@/features/auth/queries/getAuth";
import TicketCard from "@/features/tickets/components/TicketCard";
import { getTickets } from "@/features/tickets/queries/get-tickets";
import { generateRoutePath, ROUTES } from "@/path";

async function MyTickets() {
  const { user } = await getAuth();
  if (!user?.id) return;
  const tickets = await getTickets(user?.id);

  return (
    <Box>
      <Flex className="p-4">
        <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
          <AppBreadCrumb
            items={[
              {
                title: "Tickets",
                href: generateRoutePath(ROUTES.TICKETS),
              },
              {
                title: "My Tickets",
              },
            ]}
          />
        </Paper>
      </Flex>
      <Flex
        direction="column"
        className="min-h-screen flex-wrap"
        align="center"
        gap="6"
      >
        <Text variant="h2" as="h2">
          My Tickets
        </Text>

        {tickets.map((ticket) => {
          return <TicketCard key={ticket.id} ticket={ticket} />;
        })}
      </Flex>
    </Box>
  );
}

export default MyTickets;
