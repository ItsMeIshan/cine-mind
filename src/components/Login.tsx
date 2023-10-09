"use client";
import { auth } from "@/utils/firebase";
import { validate } from "@/utils/helper";
import {
  createUserWithEmailAndPassword,
  signInWithCredential,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "@/utils/userSlice";
import { PHOTO_URL } from "@/utils/constants";
import Header from "./Header";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

const Login = () => {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const email = React.useRef<HTMLInputElement>(null);
  const password = React.useRef<HTMLInputElement>(null);
  const name = React.useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    if (
      isSignUp &&
      (name.current?.value === null || name.current?.value === "")
    ) {
      setError("Name cannot be empty.");
      setIsLoading(false);
      return;
    }
    const validation = validate(email.current!.value, password.current!.value);
    if (validation != null) {
      setError(validation);
      setIsLoading(false);
      return;
    }

    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value
      )
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: name.current?.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              dispatch(
                addUser({
                  uid: auth.currentUser?.uid,
                  email: auth.currentUser?.email,
                  displayName: auth.currentUser?.displayName,
                  photoURL: auth.currentUser?.photoURL,
                })
              );
              setIsLoading(false);
              router.replace("/browse");
            })
            .catch((error) => {
              setIsLoading(false);
              setError(error?.message);
            });
        })
        .catch((err) => {
          setIsLoading(false);
          setError(`${err?.message.split(":")[1]}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value
      )
        .then((userCredential) => {
          dispatch(
            addUser({
              uid: auth.currentUser?.uid,
              email: auth.currentUser?.email,
              displayName: auth.currentUser?.displayName,
              photoURL: auth.currentUser?.photoURL,
            })
          );
          setIsLoading(false);
          router.replace("/browse");
        })
        .catch((error) => {
          setIsLoading(false);
          setError(`${error?.message.split(":")[1]}`);
        });
    }
  }
  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex min-h-screen flex-col items-center p-24">
          <h2 className="text-2xl">{isSignUp ? "Sign Up" : "Login"}</h2>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="my-2 flex flex-col justify-between min-h-[30vh]"
          >
            {isSignUp && (
              <div>
                <input
                  ref={name}
                  className="input-boxes"
                  type="text"
                  placeholder="Name"
                />
              </div>
            )}
            <div>
              <input
                className="input-boxes"
                type="text"
                placeholder="Email"
                ref={email}
              />
            </div>
            <div>
              <input
                className="input-boxes"
                type="password"
                placeholder="Password"
                ref={password}
              />
            </div>
            <div className="flex flex-col">
              {error !== null ? (
                <span className="text-[#ff2a00] my-2 text-md">{error}</span>
              ) : (
                <></>
              )}
              <button className="bg-[#ff2a00] my-2 px-3 py-1 rounded-lg">
                {isSignUp ? "Sign Up" : "Login"}
              </button>
            </div>
            <span>
              {isSignUp ? "Already a user?" : "New to Cinemind?"}{" "}
              <a
                onClick={() => {
                  setError("");
                  setIsSignUp(!isSignUp);
                }}
                className="cursor-pointer underline"
              >
                {isSignUp ? "Sign in now" : "Sign up now"}
              </a>
            </span>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
