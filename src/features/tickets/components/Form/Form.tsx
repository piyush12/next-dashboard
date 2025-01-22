"use client";
import React from "react";

import Flex from "@/components/Shared/Flex";
import Label from "@/components/Shared/Label";
import Text from "@/components/Shared/Text";
import { TextArea } from "@/components/Shared/TextArea";
import TextField from "@/components/Shared/TextField";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { EmptyActionState } from "@/utils/utils";

import { upsertTicket } from "../../actions/upsert-ticket";

type FormDataProps = {
  title: string;
  content: string;
  id: string;
  deadline: string;
  bounty: number;
};

type TicketFormProps = {
  isEdit?: boolean;
  defaultValue?: FormDataProps;
};

function TicketForm({ isEdit = false, defaultValue }: TicketFormProps) {
  const [state, action] = React.useActionState(
    upsertTicket.bind(null, defaultValue?.id),
    EmptyActionState,
  );

  return (
    <form action={action}>
      <Flex direction="column" gap="4">
        <Flex gap="2" direction="column">
          <Label htmlFor="title">Title</Label>
          <TextField
            type="text"
            id="title"
            name="title"
            defaultValue={
              (state?.payload?.get("title") as string) ?? defaultValue?.title
            }
          />
          {state?.fieldErrors && state.fieldErrors.title && (
            <Text as="p" variant="helper" color="error">
              {state.fieldErrors.title[0]}
            </Text>
          )}
        </Flex>
        <Flex gap="2" direction="column">
          <Label htmlFor="content">Content</Label>
          <TextArea
            placeholder=""
            name="content"
            id="content"
            defaultValue={
              (state?.payload?.get("content") as string) ??
              defaultValue?.content
            }
          />
          {state?.fieldErrors && state.fieldErrors.content && (
            <Text as="p" variant="helper" color="error">
              {state.fieldErrors.content[0]}
            </Text>
          )}
        </Flex>
        <Flex>
          <Flex gap="2" direction="column">
            <Label htmlFor="deadline">Deadline</Label>
            <TextField
              type="date"
              id="deadline"
              name="deadline"
              defaultValue={
                (state?.payload?.get("deadline") as string) ??
                defaultValue?.deadline
              }
            />
            {state?.fieldErrors && state.fieldErrors.deadline && (
              <Text as="p" variant="helper" color="error">
                {state.fieldErrors.deadline[0]}
              </Text>
            )}
          </Flex>
          <Flex gap="2" direction="column">
            <Label htmlFor="bounty">Bounty</Label>
            <TextField
              type="number"
              step=".01"
              id="bounty"
              name="bounty"
              defaultValue={
                (state?.payload?.get("bounty") as string) ??
                (defaultValue?.bounty || 0) / 100
              }
              fullWidth
            />
            {state?.fieldErrors && state.fieldErrors.bounty && (
              <Text as="p" variant="helper" color="error">
                {state.fieldErrors.bounty[0]}
              </Text>
            )}
          </Flex>
        </Flex>

        <Flex gap="2" direction="column">
          <SubmitButton type="submit">
            {isEdit ? "Edit" : "Create"}
          </SubmitButton>
        </Flex>
      </Flex>
      <Text color="error" as="p" className="mt-2">
        {state?.message}
      </Text>
    </form>
  );
}

export default TicketForm;
