"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Loader from "@/components/Loader";
import { signInSchema } from "@/schemas/signInSchema";
import { signIn } from "next-auth/react";

function SignInForm() {
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        identifier: data.email,
        password: data.password,
      });
      console.log(result);
      if (result?.error) {
        setError("Login Failed. Incorrect username or password.");
        setIsLoading(false);
      }
      if (result?.url) {
        router.replace("/browse");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      setError("There was a problem with your sign-in. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex min-h-screen flex-col items-center p-24">
          <h2 className="text-2xl text-left">Sign In</h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="my-2 flex flex-col justify-between min-h-[20vh]"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="input-boxes"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="input-boxes"
                        type="Password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col">
                {error !== null ? (
                  <span className="text-[#ff2a00] my-2 text-md">{error}</span>
                ) : (
                  <></>
                )}
                <Button
                  className="submit-btn"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "..." : "Sign In"}
                </Button>
              </div>
              <span>
                Already a user?{" "}
                <Link
                  href="/sign-up"
                  onClick={() => {
                    setError("");
                  }}
                  className="cursor-pointer underline"
                >
                  Sign up now
                </Link>
              </span>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}

export default SignInForm;
