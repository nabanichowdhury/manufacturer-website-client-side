import React from "react";

const Loading = () => {
  return (
    <div class="flex justify-center items-center">
      <div
        class="spinner-border animate-spin inline-block w-20 h-20 border-4 rounded-full"
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
