import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-1 sm:px-6 sm:py-3 md:px-8 md:py-5 2xl:py-5">
      {children}
    </div>
  );
};

export default Container;
