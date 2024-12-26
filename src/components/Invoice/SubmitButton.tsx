import React from "react";

import { useFormStatus } from "react-dom";

import Button from "@/components/Shared/Button";

function SubmitButton({ children }: { children: React.ReactNode }) {
  const status = useFormStatus();

  console.log("status", status);
  return (
    <Button color="primary" type="submit" disabled={status.pending}>
      {children}
    </Button>
  );
}

export default SubmitButton;
