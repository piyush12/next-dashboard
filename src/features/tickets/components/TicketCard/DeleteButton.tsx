"use client";
import React, { useActionState, useEffect } from "react";

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
} from "@/components/Shared/AlertDialog";
import Button from "@/components/Shared/Button";
import { SubmitButton } from "@/components/SubmitButton";
import { EmptyActionState } from "@/utils/utils";

import { deleteTicket } from "../../actions/delete-ticket";

function DeleteButton({ id }: { id: string }) {
  const [state, action] = useActionState(
    deleteTicket.bind(null, id),
    EmptyActionState,
  );

  useEffect(() => {
    if (state.message) {
      console.log(state.message);
    }
  }, [state]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="default"
          color="error"
          type="button"
          // onClick={handleDelete}
        >
          Delete
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will delete the ticket.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <form action={action}>
              <SubmitButton
                variant="default"
                type="submit"
                // onClick={handleDelete}
              >
                Continue
              </SubmitButton>
            </form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteButton;
