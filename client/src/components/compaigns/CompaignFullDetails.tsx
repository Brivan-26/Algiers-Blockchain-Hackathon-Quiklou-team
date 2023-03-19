import { INFO } from "@/constants/info";
import useHook from "@/hooks/useHook";
import { error, success } from "@/utils/alerts";
import { getProfileImageSrc } from "@/utils/lib";
import { BigNumber, ethers } from "ethers";
import React, { useState } from "react";
import Detail from "../shared/Detail";
import CompaignRequestsTable from "./CompaignRequestsTable";

type Props = {
  compaign: COMPAIGN.Compaign;
  onContribute?: () => void;
};

const CompaignFullDetails: React.FC<Props> = ({
  compaign: {
    goal,
    id,
    launchDay,
    maxReachTime,
    numOfContributers,
    owner,
    story,
    tokenValue,
    title,
    contributed,
    requests,
    funds,
  },
  onContribute,
}) => {
  const { walletAddress, contract, signer } = useHook();
  const [newRequest, setNewRequest] = useState<COMPAIGN.NewRequest>({
    amount: 0,
    description: "",
    recipient: "",
  });

  const newRequestHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const tx = await contract
        .connect(signer)
        .createRequest(
          id,
          newRequest.description,
          BigNumber.from(newRequest.amount),
          newRequest.recipient
        );
      await tx.wait();
      success("The request is successfully created!");
    } catch (err) {
      console.log(err.message);
      error(err.message);
    }
  };

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
                <span className="cursor-pointer font-semibold text-white hover:underline">
                  {owner}
                </span>
              </p>
            </div>
          }
        />
        <Detail label="Story: " value={story} />
        <Detail label="Created At:" value={launchDay.toUTCString()} />
        <Detail
          label="Goal: "
          value={`${goal} ${INFO.CURRENCY}`}
        />
        <Detail
          label="Need to reach goal: "
          value={
            <div className="flex items-center gap-2 text-sm">
              <p>0</p>
              <input
                type="range"
                readOnly
                min={0}
                max={goal}
                value={funds}
                className="input accent-primary"
              />
              <p>{goal}</p>
            </div>
          }
        />
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
            value={<CompaignRequestsTable id={id} owner={owner} requests={requests} />}
          />
        )}
        {owner.toLowerCase() === walletAddress.toLowerCase() &&
          (funds >= goal ? (
            <Detail
              label="New request:"
              value={
                <form
                  onSubmit={newRequestHandler}
                  className="mt-2 flex flex-col gap-1"
                >
                  <Detail
                    label="Description:"
                    value={
                      <input
                        className="input rounded-sm ring-2 ring-primary"
                        placeholder="Description"
                        value={newRequest.description}
                        onChange={(e) =>
                          setNewRequest((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }))
                        }
                      />
                    }
                  />
                  <Detail
                    label="Recipient:"
                    value={
                      <input
                        className="input rounded-sm ring-2 ring-primary"
                        placeholder="Recipient Adress"
                        value={newRequest.recipient}
                        onChange={(e) =>
                          setNewRequest((prev) => ({
                            ...prev,
                            recipient: e.target.value,
                          }))
                        }
                      />
                    }
                  />
                  <Detail
                    label="Amount:"
                    value={
                      <input
                        className="input rounded-sm ring-2 ring-primary"
                        placeholder="Amount"
                        value={`${newRequest.amount}`}
                        type={"number"}
                        onChange={(e) =>
                          setNewRequest((prev) => ({
                            ...prev,
                            amount: e.target.valueAsNumber,
                          }))
                        }
                      />
                    }
                  />
                  <div className="flex justify-start">
                    <button className="btn">Submit</button>
                  </div>
                </form>
              }
            />
          ) : (
            <p className="text-center">
              You didn't reach your goal yet! you can not create requests
            </p>
          ))}
      </div>
    </div>
  );
};

export default CompaignFullDetails;
