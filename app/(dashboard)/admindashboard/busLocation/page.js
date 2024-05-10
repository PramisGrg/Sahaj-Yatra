import dynamic from "next/dynamic";

const CustomMapContainer = dynamic(() => import("./CustomMapContainer"), {
  ssr: false,
});
import React from "react";

const page = () => {
  return (
    <div>
      <CustomMapContainer />
    </div>
  );
};

export default page;
