import Box from "@/components/Shared/Box";
import Button from "@/components/Shared/Button";
import Checkbox from "@/components/Shared/Checkbox";
import Flex from "@/components/Shared/Flex";
import Label from "@/components/Shared/Label";
import NavLink from "@/components/Shared/Link";
import Text from "@/components/Shared/Text";
import TextField from "@/components/Shared/TextField";
import Link from "next/link";

function Login() {
  return (
    <Flex gap="4" direction="column" className="mt-6">
      <Flex direction="column" gap="2">
        <Label htmlFor="email">Email or Username</Label>
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

      <Flex align="center" justify="between">
        <Checkbox id="remember">Remember me</Checkbox>
        <NavLink href="/forgot-password">Forgot password</NavLink>
      </Flex>

      <Box>
        <Button variant="default" fullwidth type="button">
          Login
        </Button>
      </Box>
      <Box className="mt-2 text-center">
        <Text as="p" variant="body1">
          New on our platform?{" "}
          <NavLink as={Link} href="/signup">
            Create an account
          </NavLink>
        </Text>
      </Box>
    </Flex>
  );
}

export default Login;
