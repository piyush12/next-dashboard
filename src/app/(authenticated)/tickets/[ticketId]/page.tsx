import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";

import AppBreadCrumb from "@/components/AppBreadcrumb/app-breadcrumb";
import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import TicketCard from "@/features/tickets/components/TicketCard";
import { getTicket } from "@/features/tickets/queries/get-ticket";
import { generateRoutePath, ROUTES } from "@/path";

async function page({ params }: { params: Promise<{ ticketId: string }> }) {
  const { ticketId } = await params;
  const ticket = (await getTicket(ticketId)) as Prisma.TicketGetPayload<{
    include: {
      user: {
        select: {
          username: true;
        };
      };
    };
  }>;

  if (!ticket) {
    notFound();
  }

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
                title: ticket.title,
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
        <TicketCard ticket={ticket} isDetail />
      </Flex>
    </Box>
  );
}

export default page;
