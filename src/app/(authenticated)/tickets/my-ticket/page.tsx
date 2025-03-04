import AppBreadCrumb from "@/components/AppBreadcrumb/app-breadcrumb";
import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import Text from "@/components/Shared/Text";
import { getAuth } from "@/features/auth/queries/getAuth";
import TicketList from "@/features/tickets/components/ticket-list";
import { ParsedSearchParams } from "@/features/tickets/search-tickets";
import { generateRoutePath, ROUTES } from "@/path";

async function MyTickets({
  searchParams,
}: {
  searchParams: Promise<ParsedSearchParams>;
}) {
  const { user } = await getAuth();
  const searchParam = await searchParams;
  if (!user?.id) return;

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

        <TicketList userId={user.id} searchParams={searchParam} />
      </Flex>
    </Box>
  );
}

export default MyTickets;
