"use client";

import useConfirmDialog from "@/components/confirm-dialog";
import Button from "@/components/Shared/Button";

import { deleteComment } from "../actions/delete-comment";

function CommentDeleteButton({ commentId }: { commentId: string }) {
  const [dialog] = useConfirmDialog({
    title: "Delete Comment",
    description: "This action cannot be undone. This will delete the comment.",
    faction: deleteComment.bind(null, commentId),
    triggerButton: (
      <Button variant="text" color="error">
        Delete
      </Button>
    ),
  });
  return dialog;
}

export default CommentDeleteButton;
