import RegisterComponent from "@/components/Auth/Register";
import Flex from "@/components/Shared/Flex";
import Text from "@/components/Shared/Text";
import React from "react";

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
