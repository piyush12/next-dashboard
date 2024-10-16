import Box from "@/components/Shared/Box";
import Button from "@/components/Shared/Button";
import Flex from "@/components/Shared/Flex";
import Label from "@/components/Shared/Label";
import NavLink from "@/components/Shared/Link";
import Text from "@/components/Shared/Text";
import TextField from "@/components/Shared/TextField";
import Link from "next/link";

function RegisterComponent() {
  return (
    <Flex gap="4" direction="column" className="mt-6">
      <Flex direction="column" gap="2">
        <Label htmlFor="email">Username</Label>
        <TextField type="password" id="email" />
        <Text as="p" variant="helper" color="error">
          this is helper message
        </Text>
      </Flex>

      <Flex direction="column" gap="2">
        <Label htmlFor="password">Password</Label>
        <TextField type="password" id="password" />
        <Text as="p" variant="helper" color="error">
          this is helper message
        </Text>
      </Flex>

      <Flex direction="column" gap="2">
        <Label htmlFor="password">Confirm Password</Label>
        <TextField type="password" id="password" />
        <Text as="p" variant="helper" color="error">
          this is helper message
        </Text>
      </Flex>

      <Box>
        <Button variant="default" fullwidth type="button">
          Signup
        </Button>
      </Box>
      <Box className="mt-2 text-center">
        <Text as="p" variant="body1">
          Already have an account?{" "}
          <NavLink as={Link} href="/login">
            Login
          </NavLink>
        </Text>
      </Box>
    </Flex>
  );
}

export default RegisterComponent;
