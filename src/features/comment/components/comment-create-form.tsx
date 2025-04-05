"use client";

import { useActionState } from "react";

import Box from "@/components/Shared/Box";
import Text from "@/components/Shared/Text";
import { TextArea } from "@/components/Shared/TextArea";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { EmptyActionState } from "@/utils/utils";

import { addComment } from "../actions/add-comment";

function CommentCreateForm({ ticketId }: { ticketId: string }) {
  const [state, action] = useActionState(
    addComment.bind(null, ticketId),
    EmptyActionState,
  );

  return (
    <Box>
      <form action={action}>
        <TextArea
          placeholder="Add Comment"
          className="w-full"
          rows={5}
          name="content"
          id="content"
        />
        {state?.fieldErrors && state.fieldErrors.content && (
          <Text as="p" variant="helper" color="error">
            {state.fieldErrors.content[0]}
          </Text>
        )}
        <SubmitButton
          type="submit"
          variant="default"
          color="primary"
          fullwidth
          className="mt-5"
          size="large"
        >
          Submit
        </SubmitButton>
      </form>
    </Box>
  );
}

export default CommentCreateForm;
