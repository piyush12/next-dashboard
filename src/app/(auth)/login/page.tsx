import LoginComponent from "@/components/Auth/Login";
import Flex from "@/components/Shared/Flex";
import Text from "@/components/Shared/Text";

function Login() {
  return (
    <Flex gap="2" direction="column">
      <Text as="h1" variant="h4">
        Welcome to Vuexy! 👋🏻
      </Text>
      <Text as="p">Please sign-in to your account and start the adventure</Text>
      <LoginComponent />
    </Flex>
  );
}

export default Login;
