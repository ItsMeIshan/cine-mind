"use client";

import { auth } from "@/utils/firebase";
import { RootState } from "@/utils/store";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter, redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const router = useRouter();

  const user = useSelector((store: RootState) => store.user);

  return (
    <div className="flex justify-between m-2">
      <Link href={"/"}>
        <Image
          src={"/cinemind-logo.svg"}
          alt="company logo"
          width={"120"}
          height={"70"}
        />
      </Link>
      {user.uid !== "" && (
        <button
          className="bg-[#ff2a00] my-2 px-3 py-1 rounded-lg"
          onClick={() => {
            signOut(auth)
              .then(() => {})
              .catch((error) => {
                router.replace("/error");
              });
          }}
        >
          Log out
        </button>
      )}
    </div>
  );
};

export default Header;
