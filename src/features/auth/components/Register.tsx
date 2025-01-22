"use client";

import React from "react";

import Link from "next/link";

import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Label from "@/components/Shared/Label";
import NavLink from "@/components/Shared/Link";
import Text from "@/components/Shared/Text";
import TextField from "@/components/Shared/TextField";
import { SubmitButton } from "@/components/SubmitButton";
import { EmptyActionState } from "@/utils/utils";

import { signUp } from "../actions/signup";

function RegisterComponent() {
  const [state, action] = React.useActionState(signUp, EmptyActionState);
  const { fieldErrors: errors, payload } = state;
  return (
    <form action={action}>
      <Flex gap="4" direction="column" className="mt-6">
        <Flex direction="column" gap="2">
          <Label htmlFor="name">Name</Label>
          <TextField
            type="text"
            id="name"
            name="name"
            defaultValue={payload?.get("name") as string}
          />
          {errors && errors?.name && (
            <Text as="p" variant="helper" color="error">
              {errors.name[0]}
            </Text>
          )}
        </Flex>

        <Flex direction="column" gap="2">
          <Label htmlFor="email">Email</Label>
          <TextField
            type="text"
            id="email"
            name="email"
            defaultValue={payload?.get("email") as string}
          />
          {errors && errors.email && (
            <Text as="p" variant="helper" color="error">
              {errors.email[0]}
            </Text>
          )}
        </Flex>
        <Flex direction="column" gap="2">
          <Label htmlFor="username">Username</Label>
          <TextField
            type="text"
            id="username"
            name="username"
            defaultValue={payload?.get("username") as string}
          />
          {errors && errors.username && (
            <Text as="p" variant="helper" color="error">
              {errors.username[0]}
            </Text>
          )}
        </Flex>

        <Flex direction="column" gap="2">
          <Label htmlFor="password">Password</Label>
          <TextField
            type="password"
            id="password"
            name="password"
            defaultValue={payload?.get("password") as string}
          />
          {errors && errors.password && (
            <Text as="p" variant="helper" color="error">
              {errors.password[0]}
            </Text>
          )}
        </Flex>

        <Flex direction="column" gap="2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <TextField
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            defaultValue={payload?.get("confirmPassword") as string}
          />
          {errors && errors.confirmPassword && (
            <Text as="p" variant="helper" color="error">
              {errors.confirmPassword[0]}
            </Text>
          )}
        </Flex>

        <Box>
          <SubmitButton variant="default" fullwidth type="submit">
            Signup
          </SubmitButton>
        </Box>
        <Box className="mt-2 text-center">
          <Text as="p" variant="body1">
            Already have an account?{" "}
            <NavLink as={Link} href="/login">
              Login
            </NavLink>
          </Text>
        </Box>
      </Flex>
    </form>
  );
}

export default RegisterComponent;
