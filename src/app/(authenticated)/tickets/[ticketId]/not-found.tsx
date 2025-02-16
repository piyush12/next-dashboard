import { IconExclamationCircle } from "@tabler/icons-react";

import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Text from "@/components/Shared/Text";

export default function NotFound() {
  return (
    <Box>
      <Flex
        justify="center"
        align="center"
        className="h-screen"
        direction="column"
      >
        <IconExclamationCircle
          stroke={3}
          className="text-dark-primary dark:text-warning-800"
        />
        <Text as="p" color="warning" variant="h5">
          Ticket not found
        </Text>
      </Flex>
    </Box>
  );
}
