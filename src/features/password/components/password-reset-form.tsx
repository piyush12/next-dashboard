"use client";

import { useActionState } from "react";

import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Label from "@/components/Shared/Label";
import Text from "@/components/Shared/Text";
import TextField from "@/components/Shared/TextField";
import { SubmitButton } from "@/components/SubmitButton";
import { EmptyActionState } from "@/utils/utils";

import { resetPassword } from "../actions/reset-password";

function PasswordResetForm({ tokenId }: { tokenId: string }) {
  const [state, action] = useActionState(
    resetPassword.bind(null, tokenId),
    EmptyActionState,
  );

  return (
    <form action={action}>
      <Flex gap="4" direction="column" className="mt-6">
        <Flex direction="column" gap="2">
          <Label htmlFor="password">Password</Label>
          <TextField
            type="password"
            id="password"
            name="password"
            defaultValue={state?.payload?.get("password") as string}
          />
          {state.fieldErrors && state.fieldErrors.password && (
            <Text as="p" variant="helper" color="error">
              {state.fieldErrors.password[0]}
            </Text>
          )}
        </Flex>

        <Flex direction="column" gap="2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <TextField
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            defaultValue={state?.payload?.get("confirmPassword") as string}
          />
          {state.fieldErrors && state.fieldErrors.confirmPassword && (
            <Text as="p" variant="helper" color="error">
              {state.fieldErrors.confirmPassword[0]}
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

export default PasswordResetForm;
