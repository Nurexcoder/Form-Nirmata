// src/LoadingPage.js

import React from "react";

const LoadingPage = ({ loading }) => {
  console.log(loading);
  return (
    <div
      className={`${
        !loading ? "hidden" : "flex"
      }  h-screen items-center justify-center w-full absolute bg-slate-400/30`}
      
    >
      <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin h-16 w-16"></div>
    </div>
  );
};

export default LoadingPage;
