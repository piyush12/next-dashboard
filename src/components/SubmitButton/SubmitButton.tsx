import React from "react";

import { useFormStatus } from "react-dom";

import { ComponentLoader } from "@/components/ComponentLoader";
import Button from "@/components/Shared/Button";

import { ButtonVariant } from "../Shared/Button/Button";

function Loader() {
  return (
    <>
      <ComponentLoader /> Loading...
    </>
  );
}

function SubmitButton({
  children,
  variant = "default",
  fullwidth = false,
  type,
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  fullwidth?: boolean;
  type: "submit" | "button";
}) {
  const status = useFormStatus();
  return (
    <Button
      variant={variant}
      fullwidth={fullwidth}
      type={type}
      disabled={status.pending}
    >
      {status.pending ? <Loader /> : children}
    </Button>
  );
}

export default SubmitButton;
