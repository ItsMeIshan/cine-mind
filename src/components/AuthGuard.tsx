"use client";
import { auth } from "@/utils/firebase";
import { RootState } from "@/utils/store";
import { addUser, removeUser } from "@/utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loader from "./Loader";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((store: RootState) => store.user);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user?.uid,
            name: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
          })
        );
        router.replace("/browse");
      } else {
        dispatch(removeUser());
        router.push("/");
      }
    });
    return () => unSubscribe();
  }, []);
  if (user.uid === undefined || user.uid === "") {
    return <Loader />;
  }
  return <div>{children}</div>;
};

export default AuthGuard;
