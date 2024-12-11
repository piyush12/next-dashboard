import React from "react";
import Button from "@/components/Shared/Button";
import { useFormStatus } from "react-dom";

function SubmitButton({ children }: { children: React.ReactNode }) {
  const status = useFormStatus();

  console.log("status", status);
  return (
    <Button colors="primary" type="submit" disabled={status.pending}>
      {children}
    </Button>
  );
}

export default SubmitButton;
