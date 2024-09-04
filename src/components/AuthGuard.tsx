"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Loader from "./Loader";
import { useSession } from "next-auth/react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loader />;
  }
  if (status === "unauthenticated") {
    router.replace("/sign-in");
    return (
      <div>
        Not Authenticated{" "}
        <a href="/sign-in">
          <button>Back to Signin</button>
        </a>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default AuthGuard;
