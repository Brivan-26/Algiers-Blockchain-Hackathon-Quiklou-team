import useHook from "@/hooks/useHook";
import { error, success } from "@/utils/alerts";
import React from "react";
import Detail from "../shared/Detail";
import { BigNumber } from "ethers";

const CreateCompaignIndex: React.FC = () => {
  const { contract, signer } = useHook();
  const [compaign, setCompaign] = React.useState<COMPAIGN.NewCompaign>({
    goal: 0,
    title: "",
    story: "",
    tokenValue: 0,
    maxReachTime: new Date(),
    icoToken: 0,
  });

  const onChange = <T extends keyof COMPAIGN.NewCompaign>(
    name: T,
    value: COMPAIGN.NewCompaign[T]
  ) => {
    setCompaign({ ...compaign, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      ...compaign,
      maxReachTime: Math.round(compaign.maxReachTime.getTime() / 1000),
    };
    try {
      const tx = await contract
        .connect(signer)
        .createProject(
          data.title,
          BigNumber.from(data.goal),
          data.story,
          data.maxReachTime,
          data.tokenValue,
          BigNumber.from(data.icoToken)
        );
      await tx.wait();
      success("Campaign successfully created!");
    } catch (err) {
      console.log(err.message);
      error(err.message);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="container py-10">
        <h1 className="head">New compaign:</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <Detail
            label="Title"
            value={
              <input
                className="input rounded-sm ring-2 ring-gray-500"
                placeholder="Title..."
                value={compaign.title}
                onChange={(e) => onChange("title", e.target.value)}
              />
            }
          />
          <Detail
            label="Story"
            value={
              <textarea
                className="input rounded-sm ring-2 ring-gray-500"
                placeholder="Story..."
                value={compaign.story}
                onChange={(e) => onChange("story", e.target.value)}
              />
            }
          />
          <Detail
            label="Goal(in wei)"
            value={
              <input
                className="input rounded-sm ring-2 ring-gray-500"
                type={"number"}
                value={compaign.goal}
                onChange={(e) => onChange("goal", e.target.valueAsNumber)}
              />
            }
          />
          <Detail
            label="ICO Token Total supply"
            value={
              <input
                className="input rounded-sm ring-2 ring-gray-500"
                type="number"
                placeholder="ICO Token Address"
                value={compaign.icoToken}
                onChange={(e) => onChange("icoToken", e.target.valueAsNumber)}
              />
            }
          />
          <Detail
            label="Token value (in wei)"
            value={
              <input
                className="input rounded-sm ring-2 ring-gray-500"
                placeholder="Token value"
                type={"number"}
                value={compaign.tokenValue}
                onChange={(e) => onChange("tokenValue", e.target.valueAsNumber)}
              />
            }
          />
          <Detail
            label="Max reach time"
            value={
              <input
                className="input rounded-sm ring-2 ring-gray-500"
                type={"datetime-local"}
                onChange={(e) =>
                  onChange("maxReachTime", new Date(e.target.valueAsNumber))
                }
              />
            }
          />

          <Detail
            label=""
            value={
              <div className="flex justify-end">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            }
          />
        </form>
      </div>
    </div>
  );
};

export default CreateCompaignIndex;
