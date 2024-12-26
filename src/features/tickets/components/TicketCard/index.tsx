import React from "react";

import Link from "next/link";

import Button from "@/components/Shared/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubTitle,
  CardContent,
  CardFooter,
} from "@/components/Shared/Card";
import Text from "@/components/Shared/Text";

function TicketCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tickets1</CardTitle>
        <CardSubTitle>Test Ticketes</CardSubTitle>
      </CardHeader>
      <CardContent>
        <Text as="p" variant="body1">
          Perfect for lead UI developers managing large apps, migrating
          codebases, or starting scalable projects while maintaining code
          quality. Learn unit testing with Vitest, continuous integration via
          GitHub Actions, component and accessibility testing with Axe, mocking
          techniques, and code standard enforcement using ESLint and Husky &
          Lint-Staged. Guide your team toward coding scalability!
        </Text>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href="tickets/1">
          <Button variant="default" color="primary" type="button">
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default TicketCard;
