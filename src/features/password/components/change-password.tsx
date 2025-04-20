"use client";
import { useActionState } from "react";

import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Label from "@/components/Shared/Label";
import Text from "@/components/Shared/Text";
import TextField from "@/components/Shared/TextField";
import { SubmitButton } from "@/components/SubmitButton";
import { EmptyActionState } from "@/utils/utils";

import { changePassword } from "../actions/change-password";

function ChangePasswordForm() {
  const [state, action] = useActionState(changePassword, EmptyActionState);

  return (
    <form action={action}>
      <Flex gap="4" direction="column" className="mt-6">
        <Flex direction="column" gap="2">
          <Label htmlFor="password">Current Password</Label>
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

        <Box>
          <SubmitButton variant="default" fullwidth type="submit">
            Send Email
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

export default ChangePasswordForm;
