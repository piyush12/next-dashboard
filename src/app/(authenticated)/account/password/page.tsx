import React from "react";

import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import Text from "@/components/Shared/Text";
import ChangePasswordForm from "@/features/password/components/change-password";

function ChangePassword() {
  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      className="min-h-screen"
    >
      <Paper className="w-[460px] p-12">
        <Flex gap="2" direction="column">
          <Text as="h1" variant="h4">
            Change Password 👋🏻
          </Text>
          <ChangePasswordForm />
        </Flex>
      </Paper>
    </Flex>
  );
}

export default ChangePassword;
