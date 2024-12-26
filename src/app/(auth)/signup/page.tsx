import React from "react";

import RegisterComponent from "@/components/Auth/Register";
import { SignUpFormData } from "@/components/Auth/validation";
import Flex from "@/components/Shared/Flex";
import Text from "@/components/Shared/Text";

function SignUp() {
  async function onFormSubmit(formData: SignUpFormData) {
    "use server";
    console.log("formData", formData);
  }

  return (
    <Flex gap="2" direction="column">
      <Text as="h1" variant="h4">
        Welcome to Vuexy! 🚀
      </Text>
      <Text as="p">Make your app management easy and fun!</Text>
      <RegisterComponent onFormSubmit={onFormSubmit} />
    </Flex>
  );
}

export default SignUp;
