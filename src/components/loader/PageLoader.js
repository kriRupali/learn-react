import React from "react";
import { Audio } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default PageLoader;
