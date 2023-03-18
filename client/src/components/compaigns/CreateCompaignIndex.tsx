import React from "react";
import Detail from "../shared/Detail";

const CreateCompaignIndex: React.FC = () => {
  const [compaign, setCompaign] = React.useState<COMPAIGN.NewCompaign>({
    goal: 0,
    title: "",
    story: "",
    maxReachTime: new Date(),
  });

  const onChange = <T extends keyof COMPAIGN.NewCompaign>(
    name: T,
    value: COMPAIGN.NewCompaign[T]
  ) => {
    setCompaign({ ...compaign, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(compaign);
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
            label="Goal"
            value={
              <input
                className="input rounded-sm ring-2 ring-gray-500"
                placeholder="Goal"
                type={"number"}
                value={compaign.goal}
                onChange={(e) => onChange("goal", e.target.valueAsNumber)}
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
