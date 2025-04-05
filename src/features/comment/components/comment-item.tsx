import { User } from "@prisma/client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardSubTitle,
} from "@/components/Shared/Card";
import Text from "@/components/Shared/Text";
import { isOwner } from "@/features/auth/utils/is-owner";

import { CommentWithMetadata } from "../types";

import CommentDeleteButton from "./comment-delete-button";

type IProps = {
  comment: CommentWithMetadata;
  user: User | null;
};

function CommentItem({ comment, user }: IProps) {
  const isCommentOwner = isOwner(user, comment);

  return (
    <Card className="w-full max-w-full">
      <CardHeader className="mb-3 flex-row justify-between">
        <CardSubTitle variant="subtitle2" color="secondary">
          {comment.user?.username}
        </CardSubTitle>
        <CardSubTitle variant="subtitle2" color="secondary">
          {comment.createdAt.toLocaleString()}
        </CardSubTitle>
      </CardHeader>

      <CardContent className="mb-3">
        <Text as="p" variant="body1">
          {comment.content}
        </Text>
      </CardContent>
      <CardFooter className="flex justify-end">
        {isCommentOwner && <CommentDeleteButton commentId={comment.id} />}
        {/* TODO */}
        {/* <Button variant="text" color="primary" className="!pr-0">
          Reply
        </Button> */}
      </CardFooter>
    </Card>
  );
}

export default CommentItem;
