import React from "react";

import Flex from "@/components/Shared/Flex";
import Text from "@/components/Shared/Text";
import EmailVerificationForm from "@/features/auth/components/email-verification-form";

function VerifyEmail() {
  return (
    <Flex gap="2" direction="column">
      <Text as="h1" variant="h4">
        Verify Email
      </Text>
      <Text as="p" variant="body2">
        Check your email for verification code
      </Text>
      <EmailVerificationForm />
    </Flex>
  );
}

export default VerifyEmail;
