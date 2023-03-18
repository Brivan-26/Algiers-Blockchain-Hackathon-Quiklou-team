import { INFO } from "@/constants/info";
import useHook from "@/hooks/useHook";
import { getProfileImageSrc } from "@/utils/lib";
import React from "react";
import Detail from "../shared/Detail";
import CompaignRequestsTable from "./CompaignRequestsTable";

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
    tokenValue,
    title,
    contributed,
    requests,
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
                <span className="cursor-pointer text-white font-semibold hover:underline">{owner}</span>
              </p>
            </div>
          }
        />
        <Detail label="Story: " value={story} />
        <Detail label="Created At:" value={launchDay.toUTCString()} />
        <Detail label="Goal: " value={`${goal} ${INFO.CURRENCY}`} />
        <Detail label="Token value(per wei):" value={tokenValue} />
        <Detail label="Max Reach Time:" value={maxReachTime.toUTCString()} />
        {!contributed && (
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
        )}
        {contributed && requests && (
          <Detail
            label="Requests: "
            value={<CompaignRequestsTable requests={requests} />}
          />
        )}
      </div>
    </div>
  );
};

export default CompaignFullDetails;
