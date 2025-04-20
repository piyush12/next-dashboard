"use client";

import React, { useEffect } from "react";

import Link from "next/link";

import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Label from "@/components/Shared/Label";
import NavLink from "@/components/Shared/Link";
import Text from "@/components/Shared/Text";
import TextField from "@/components/Shared/TextField";
import { useToastContext } from "@/components/Shared/Toast/context";
import { SubmitButton } from "@/components/SubmitButton";
import { EmptyActionState } from "@/utils/utils";

import { signIn } from "../actions/signin";

function Login() {
  const [state, action] = React.useActionState(signIn, EmptyActionState);
  const { error } = useToastContext();
  const { fieldErrors: errors, message } = state;

  useEffect(() => {
    if (message) {
      error(message);
    }
  }, [state, message, error]);

  return (
    <form action={action}>
      <Flex gap="4" direction="column" className="mt-6">
        <Flex direction="column" gap="2">
          <Label htmlFor="email">Email or Username</Label>
          <TextField type="text" id="email" name="email" />
          {errors && errors.email && (
            <Text as="p" variant="helper" color="error">
              {errors.email[0]}
            </Text>
          )}
        </Flex>

        <Flex direction="column" gap="2">
          <Label htmlFor="password">Password</Label>
          <TextField type="password" id="password" name="password" />
          {errors && errors.password && (
            <Text as="p" variant="helper" color="error">
              {errors.password[0]}
            </Text>
          )}
        </Flex>

        <Flex align="center" justify="end">
          <NavLink href="/forgot-password">Forgot password</NavLink>
        </Flex>

        <Box>
          <SubmitButton variant="default" fullwidth type="submit">
            Login
          </SubmitButton>
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
    </form>
  );
}

export default Login;
