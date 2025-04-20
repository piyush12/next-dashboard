"use client";
import React, { useActionState } from "react";

import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Label from "@/components/Shared/Label";
import Text from "@/components/Shared/Text";
import TextField from "@/components/Shared/TextField";
import { SubmitButton } from "@/components/SubmitButton";
import { EmptyActionState } from "@/utils/utils";

import { forgotPassword } from "../actions/forgot-password";

function ForgotPasswordForm() {
  const [state, action] = useActionState(forgotPassword, EmptyActionState);
  return (
    <form action={action}>
      <Flex gap="4" direction="column" className="mt-6">
        <Flex direction="column" gap="2">
          <Label htmlFor="email">Email</Label>
          <TextField
            type="email"
            id="email"
            name="email"
            defaultValue={state?.payload?.get("email") as string}
          />
          {state.fieldErrors && state.fieldErrors.email && (
            <Text as="p" variant="helper" color="error">
              {state.fieldErrors.email[0]}
            </Text>
          )}
        </Flex>

        <Box>
          <SubmitButton variant="default" fullwidth type="submit">
            Submit
          </SubmitButton>
        </Box>
        {state.message && (
          <Text as="p" variant="helper" color="error">
            {state.message}
          </Text>
        )}
      </Flex>
    </form>
  );
}

export default ForgotPasswordForm;
