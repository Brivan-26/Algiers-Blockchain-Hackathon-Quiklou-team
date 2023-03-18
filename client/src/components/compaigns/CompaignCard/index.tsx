import { INFO } from "@/constants/info";
import { getProfileImageSrc } from "@/utils/lib";
import { ethers } from "ethers";
import React from "react";

type Props = COMPAIGN.Compaign & {
  onClick?: (e: React.MouseEvent<any, MouseEvent>) => void;
  onContribute?: () => void;
};

const CompaignCard: React.FC<Props> = ({
  goal,
  launchDay,
  maxReachTime,
  numOfContributers,
  owner,
  tokenValue,
  story,
  title,
  contributed,
  onClick,
  onContribute,
}) => {
  console.log(launchDay, title);
  /* -------------------------------------------------------------------------- */
  /*                                 RENDER JSX                                 */
  /* -------------------------------------------------------------------------- */
  return (
    <div
      id="name"
      onClick={onClick}
      className="group flex h-full cursor-pointer flex-col gap-2 overflow-hidden rounded-lg bg-gray-800 shadow transition duration-300 hover:bg-gray-700"
    >
      <div className="flex flex-col gap-3 py-3 px-4">
        <div className="h-16">
          <p className="font-medium text-white line-clamp-2">{title}</p>
          <p className="text-xs text-gray-500 line-clamp-1">{story}</p>
        </div>
        <div className="flex flex-col gap-2 divide-gray-500">
          <div className="flex flex-col">
            <p className="text-xs text-gray-500">Created At</p>
            <p className="text-xs font-semibold text-white">
              {launchDay.toDateString()}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-gray-500">Goal</p>
            <p className="text-xs font-semibold text-white">
              {goal} {INFO.CURRENCY}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-gray-500">Max Reach Time</p>
            <p className="text-xs font-semibold text-white">
              {maxReachTime.toDateString()}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-gray-500">N° contributors</p>
            <p className="text-xs font-semibold text-white">
              {numOfContributers}
            </p>
          </div>
          <div className="flex justify-end">
            <button
              disabled={contributed}
              className="btn"
              name="contribute"
              onClick={onContribute}
            >
              {contributed ? "Contributed" : "Contribute"}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={getProfileImageSrc(owner)}
            alt={`picture of ${owner}`}
            className="h-7 w-7 overflow-hidden rounded-full object-cover"
          />
          <p className="text-xs text-gray-400">
            <span className="text-gray-500">by</span>{" "}
            <span className="hover:underline">{owner.slice(0, 25)}...</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompaignCard;
