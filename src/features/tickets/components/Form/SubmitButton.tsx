"use client";
import React from "react";

import { useFormStatus } from "react-dom";

import { ComponentLoader } from "@/components/ComponentLoader";
import Button from "@/components/Shared/Button";

function Loader() {
  return (
    <>
      <ComponentLoader /> Loading...
    </>
  );
}

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button variant="default" fullwidth type="submit" disabled={pending}>
      {pending ? <Loader /> : children}
    </Button>
  );
}

export default SubmitButton;
