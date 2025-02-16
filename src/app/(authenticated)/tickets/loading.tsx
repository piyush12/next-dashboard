import { ComponentLoader } from "@/components/ComponentLoader";
import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";

function Loading() {
  return (
    <Box className="h-screen">
      <Flex justify="center" align="center" className="h-full">
        <ComponentLoader width="50" height="50" />
      </Flex>
    </Box>
  );
}

export default Loading;
