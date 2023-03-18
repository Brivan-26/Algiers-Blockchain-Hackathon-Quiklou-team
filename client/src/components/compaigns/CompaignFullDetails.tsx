import { INFO } from "@/constants/info";
import { getProfileImageSrc } from "@/utils/lib";
import React from "react";

type Props = {
  compaign: COMPAIGN.Compaign;
  onContribute?: () => void;
};

const CompaignFullDetails: React.FC<Props> = ({
  compaign: {
    goal,
    launchDay,
    maxReachTime,
    numOfContributers,
    owner,
    story,
    title,
    contributed,
  },
  onContribute,
}) => {
  return (
    <div className="text-white ">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h1 className="grow text-lg font-semibold">{title}</h1>
          <Detail label="Number of contributers:" value={numOfContributers} />
        </div>
        <Detail
          label="Owner:"
          value={
            <div className="flex items-center gap-2">
              <img
                src={getProfileImageSrc(owner)}
                alt={`picture of ${owner}`}
                className="h-7 w-7 overflow-hidden rounded-full object-cover"
              />
              <p className="text-xs text-gray-400">
                <span className="text-gray-300">by</span>{" "}
                <span className="cursor-pointer hover:underline">{owner}</span>
              </p>
            </div>
          }
        />
        <Detail label="Story: " value={story} />
        <Detail label="Created At:" value={launchDay.toUTCString()} />
        <Detail label="Goal: " value={`${goal} ${INFO.CURRENCY}`} />
        <Detail label="Max Reach Time:" value={maxReachTime.toUTCString()} />
        <Detail
          label="Actions:"
          value={
            <div>
              <button
                disabled={contributed}
                onClick={onContribute}
                className="btn"
              >
                {contributed ? "Contributed" : "Contribute"}
              </button>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default CompaignFullDetails;

type DetailProps = {
  label: string;
  value: string | number | React.ReactNode;
};

const Detail: React.FC<DetailProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-y-1  rounded-lg bg-gray-700 p-4 transition duration-200 hover:bg-gray-600">
      <span className="text-sm text-gray-300">{label}</span>
      {typeof value === "string" || typeof value === "number" ? (
        <p className="text-sm">{value}</p>
      ) : (
        <div>{value}</div>
      )}
    </div>
  );
};
