import React from "react";

const Loader = ({ height = 100 }) => {
  return (
    <div className={`flex justify-center items-center max-h-[${height}%]`}>
      <div className="lds-hourglass w-[80px] h-[80px]"></div>;
    </div>
  );
};

export default Loader;
