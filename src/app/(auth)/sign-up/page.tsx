"use client";

import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validator/account-credentials-validator";
import { trpc } from "@/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ZodError } from "zod";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const router = useRouter();

  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({
    onError: (err) => {
      if (err.data?.code === "CONFLICT") {
        toast.error("This email is already in use. Sign in instead?");
        return;
      }

      if (err instanceof ZodError) {
        toast.error(err.issues[0].message);
        return;
      }

      toast.error("Something went wrong. Please try again.");
    },

    onSuccess: ({ sentToEmail }) => {
      toast.success(`Verification email sent to ${sentToEmail}.`);
      router.push("/verify-email?to=" + sentToEmail);
    },
  });

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    mutate({ email, password });
  };

  return (
    <>
      <div className="min-h-screen container flex flex-col items-center pt-10 px-4 sm:px-0 mx-auto">
        <div className="w-full sm:w-[350px] flex flex-col justify-center space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            {/* <Icons.logo className="h-20 w-20" /> Sign up Logo goes here */}
            <h1 className="text-2xl font-bold text-zinc-900">
              Create Your Dream
            </h1>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5 text-blue-500",
              })}
              href="/sign-in"
            >
              Already have an account? Login
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="You@example.com"
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    type="password"
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder="Password"
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button className="rounded-3xl h-10 px-4 py-2 text-zinc-100 bg-zinc-900 hover:bg-zinc-900">
                  Sign up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
