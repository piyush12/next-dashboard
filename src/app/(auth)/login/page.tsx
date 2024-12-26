import { IconBrandGithub } from "@tabler/icons-react";

import { signIn } from "@/auth";
import LoginComponent from "@/components/Auth/Login";
import { LoginFormData } from "@/components/Auth/validation";
import Button from "@/components/Shared/Button";
import Flex from "@/components/Shared/Flex";
import Text from "@/components/Shared/Text";
import { ROUTES } from "@/utils/constants";

function Login() {
  async function handleSignInGithub() {
    "use server";
    await signIn("github", {
      redirectTo: ROUTES.INVOICES,
    });
  }

  async function onFormSubmit(params: LoginFormData) {
    "use server";
    console.log("params", params);
  }

  return (
    <Flex gap="2" direction="column">
      <Text as="h1" variant="h4">
        Welcome to Vuexy! 👋🏻
      </Text>
      <Text as="p">Please sign-in to your account and start the adventure</Text>
      <LoginComponent onFormSubmit={onFormSubmit} />
      <Button
        onClick={handleSignInGithub}
        fullwidth
        size="large"
        className="mt-8 bg-github"
      >
        <IconBrandGithub stroke={2} /> Sign in with GitHub
      </Button>
    </Flex>
  );
}

export default Login;
