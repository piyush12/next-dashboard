"use client";

import { useActionState } from "react";

import Box from "@/components/Shared/Box";
import { FileInput } from "@/components/Shared/FileInput";
import Flex from "@/components/Shared/Flex";
import Text from "@/components/Shared/Text";
import { SubmitButton } from "@/components/SubmitButton";
import { EmptyActionState } from "@/utils/utils";

import { createAttachment } from "../actions/create-attachement";
import { ACCEPTED } from "../constants";

function Attachment({ ticketId }: { ticketId: string }) {
  const [state, action] = useActionState(
    createAttachment.bind(null, ticketId),
    EmptyActionState,
  );

  return (
    <Box>
      <Flex direction="column" gap="8">
        <Text variant="h5" as="h5">
          Add Attachement
        </Text>
        <form action={action} key={state.message}>
          <Box className="flex flex-col gap-6">
            <FileInput
              placeholder="Choose file"
              size="small"
              multiple
              accept={ACCEPTED.join(",")}
              name="files"
            />
            <SubmitButton fullwidth variant="default">
              Upload
            </SubmitButton>
            {state && state.fieldErrors && (
              <Text as="p" variant="helper" color="error">
                {state.fieldErrors.files}
              </Text>
            )}
            {state && state.message && (
              <Text as="p" variant="helper" color="success">
                {state.message}
              </Text>
            )}
          </Box>
        </form>
      </Flex>
    </Box>
  );
}

export default Attachment;
