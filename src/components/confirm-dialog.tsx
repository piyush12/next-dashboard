"use client";
import React, { useActionState } from "react";

import { ActionState, EmptyActionState } from "@/utils/utils";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./Shared/AlertDialog";
import Text from "./Shared/Text";
import { SubmitButton } from "./SubmitButton";

type DialogProps = {
  title?: string;
  description?: string;
  triggerButton?: React.ReactNode;
  faction: () => Promise<ActionState>;
};

function useConfirmDialog({
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. This will delete the ticket.",
  triggerButton,
  faction,
}: DialogProps) {
  const [state, action] = useActionState(faction, EmptyActionState);

  const dialog = (
    <AlertDialog>
      <AlertDialogTrigger asChild>{triggerButton}</AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          {state.message && (
            <Text color="error" as="p">
              {state.message}
            </Text>
          )}
          <AlertDialogTitle>{title}</AlertDialogTitle>

          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <form action={action}>
              <SubmitButton variant="default" type="submit">
                Continue
              </SubmitButton>
            </form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return [dialog];
}

export default useConfirmDialog;
