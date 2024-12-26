"use client";
import NextError from "next/error";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <NextError statusCode={500} title={error.message} />;
}
