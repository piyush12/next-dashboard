import Flex from "@/components/Shared/Flex";
import Text from "@/components/Shared/Text";
import RegisterComponent from "@/features/auth/components/Register";

function SignUp() {
  return (
    <Flex gap="2" direction="column">
      <Text as="h1" variant="h4">
        Welcome to Vuexy! 🚀
      </Text>
      <Text as="p">Make your app management easy and fun!</Text>
      <RegisterComponent />
    </Flex>
  );
}

export default SignUp;
