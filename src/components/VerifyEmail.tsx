"use client";

import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import React from "react";

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.VerifyEmail.useQuery({
    token,
  });

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="h-8 w-8 text-red-600" />
        <h3 className="font-semibold text-xl">There Was A Problem Loading</h3>
        <p className="text-muted-foreground text-sm">
          This token is not valid or might be expired. Please try again.
        </p>
      </div>
    );
  }

  if (data?.success) {
    return (
      <div className="flex  flex-col items-center justify-center mt-200">
        <div className="relative mb-1 text-muted-foreground">
          <Image
            src="/dream-email-completed.png"
            width={400}
            height={300}
            alt="the email was sent"
          />
        </div>
        <h3 className="font-semibold text-2xl">You&apos;re all set!</h3>
        <p className="  text-center font-semibold">
          Thanks for joining <span className="text-pink-600">Dream</span>
        </p>
        <Link className={buttonVariants({ className: "mt-4" })} href="/sign-in">
          Login
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin h-8 w-8 text-zinc-300" />
        <h3 className="font-semibold text-xl">Verifying...</h3>
        <p className="text-muted-foreground text-sm">
          This won&apos;t take long.
        </p>
      </div>
    );
  }
};

export default VerifyEmail;
