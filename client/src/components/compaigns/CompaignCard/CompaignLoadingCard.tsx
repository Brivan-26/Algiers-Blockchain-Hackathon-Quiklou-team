import React from "react";

const CompaignLoadingCard: React.FC = () => {
  return (
    <div className="anima group flex h-full cursor-pointer flex-col gap-2 overflow-hidden rounded-lg bg-gray-800 shadow transition duration-300 hover:bg-gray-700">
      <div className="flex animate-pulse flex-col gap-2 py-3 px-4">
        <div className="h-4 w-full rounded bg-gray-500" />
        <div className="h-3 w-3/4 rounded bg-gray-500" />
        <div className="h-2 w-1/2 rounded bg-gray-600" />
        <div className="h-3 w-3/4 rounded bg-gray-500" />
        <div className="h-2 w-1/2 rounded bg-gray-600" />
        <div className="h-3 w-3/4 rounded bg-gray-500" />
        <div className="h-2 w-1/2 rounded bg-gray-600" />
        <div className="h-3 w-3/4 rounded bg-gray-500" />
        <div className="h-7 w-1/2 self-end rounded bg-gray-600" />
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gray-600" />
          <div className="h-3 grow rounded bg-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default CompaignLoadingCard;
