import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center gap-1">
      <p>Loading</p>
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-7 w-7 border-y-2 border-blue-500"></div>
      </div>
    </div>
  );
};

export default Loading;
