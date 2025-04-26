"use client";
import { useActionState } from "react";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import AppOtpInput from "@/components/otp-input";
import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Label from "@/components/Shared/Label";
import Text from "@/components/Shared/Text";
import { SubmitButton } from "@/components/SubmitButton";
import { EmptyActionState } from "@/utils/utils";

import { emailVerification } from "../actions/email-verification";

function EmailVerificationForm() {
  const [state, action] = useActionState(emailVerification, EmptyActionState);

  return (
    <form action={action}>
      <Flex gap="4" direction="column" className="mt-6">
        <Flex direction="column" gap="2">
          <Label htmlFor="email">Code</Label>
          <Flex>
            <AppOtpInput
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              length={8}
              name="code"
            />
          </Flex>

          {state.fieldErrors && state.fieldErrors.code && (
            <Text as="p" variant="helper" color="error">
              {state.fieldErrors.code[0]}
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

export default EmailVerificationForm;
