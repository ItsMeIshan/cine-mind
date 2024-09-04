"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "@/utils/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: Session } = useSession();
  const user: User = Session?.user;
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
      {Session ? (
        <button
          className="bg-[#ff2a00] my-2 px-3 py-1 rounded-lg"
          onClick={() => {
            dispatch(removeUser());
            signOut();
          }}
        >
          Log out
        </button>
      ) : (
        <Link href={"/sign-in"}>
          <button className="bg-[#ff2a00] my-2 px-3 py-1 rounded-lg">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
