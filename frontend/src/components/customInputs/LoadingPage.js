// src/LoadingPage.js

import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin h-16 w-16"></div>
    </div>
  );
};

export default LoadingPage;
