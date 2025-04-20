import Flex from "@/components/Shared/Flex";
import Text from "@/components/Shared/Text";
import ForgotPasswordForm from "@/features/password/components/forgot-password-form";

function ForgotPassword() {
  return (
    <Flex gap="2" direction="column">
      <Text as="h1" variant="h4">
        Forgot Password
      </Text>
      <ForgotPasswordForm />
    </Flex>
  );
}

export default ForgotPassword;
