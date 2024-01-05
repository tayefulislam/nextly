"use client";

import React from "react";

const ReadMoreBtn = () => {
  return (
    <div className="flex justify-end">
      <button
        className="bg-red-500 rounded-xl px-2 py-1"
        onClick={() => console.log("Full News")}
      >
        Read More
      </button>
    </div>
  );
};

export default ReadMoreBtn;
