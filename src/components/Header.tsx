import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image
        src={"/cinemind-logo.svg"}
        alt="company logo"
        width={"120"}
        height={"70"}
        className="m-2"
      />
    </div>
  );
};

export default Header;
