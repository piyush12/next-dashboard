import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";

import AppBreadCrumb from "@/components/AppBreadcrumb/app-breadcrumb";
import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import Text from "@/components/Shared/Text";
import { getAuth } from "@/features/auth/queries/getAuth";
import CommentCreateForm from "@/features/comment/components/comment-create-form";
import CommentItem from "@/features/comment/components/comment-item";
import { getComment } from "@/features/comment/queries/get-comment";
import TicketCard from "@/features/tickets/components/TicketCard";
import { getTicket } from "@/features/tickets/queries/get-ticket";
import { generateRoutePath, ROUTES } from "@/path";

async function page({ params }: { params: Promise<{ ticketId: string }> }) {
  const { ticketId } = await params;

  const { user } = await getAuth();

  const comments = await getComment(ticketId);

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
        className="m-auto min-h-screen w-1/3 flex-wrap"
        align="center"
        gap="6"
      >
        <TicketCard ticket={ticket} isDetail user={user} />
        <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
          <CommentCreateForm ticketId={ticketId} />
        </Paper>

        <Text as="h2" variant="h5" color="info" className="w-full text-left">
          Comment
        </Text>
        {comments?.map((comment) => {
          return <CommentItem comment={comment} key={comment.id} user={user} />;
        })}
      </Flex>
    </Box>
  );
}

export default page;
