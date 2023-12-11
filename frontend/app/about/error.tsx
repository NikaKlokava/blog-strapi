"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
type ErrorType = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorType) {
  const { push } = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className=" flex  flex-col items-center">
      <h2 className=" ">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className=" border-2 border-rose-300 border-dotted m-10 rounded p-3 "
      >
        Try again
      </button>
      <Link
        href="/"
        className=" border-2 border-rose-300 border-solid   rounded p-3 "
      >
        Back to Home
      </Link>
    </main>
  );
}
