import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("./MapContainer"), {
  ssr: false,
});

import React from "react";

const page = () => {
  return (
    <div>
      <MapContainer />
    </div>
  );
};

export default page;
