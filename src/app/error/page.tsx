import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100%]">
      <h1 className="">Oops Something went wrong !</h1>
      <span className="mt-2 underline">
        <Link href={"/"}>Back to Home</Link>
      </span>
    </div>
  );
};

export default Error;
