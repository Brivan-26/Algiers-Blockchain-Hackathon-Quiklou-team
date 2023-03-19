import { DUMMY_COMPAIGNS } from "@/data/compaigns.dummy";
import React, { useState } from "react";
import Modal from "../shared/Modal";
import CompaignCard from "./CompaignCard";
import CompaignFullDetails from "./CompaignFullDetails";
import CompaignLoadingCard from "./CompaignCard/CompaignLoadingCard";
import useHook from "@/hooks/useHook";
import Detail from "../shared/Detail";
import { error, success } from "@/utils/alerts";
import { ethers } from "ethers";

const AllCompaignsIndex = () => {
  const { walletAddress, contract, signer } = useHook();
  /* -------------------------------------------------------------------------- */
  /*                                   STATES                                   */
  /* -------------------------------------------------------------------------- */
  const [compaigns, setCompaigns] = useState<COMPAIGN.Compaign[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [selectedCompaign, setSelectedCompaign] =
    useState<COMPAIGN.Compaign | null>(null);

  const [selectedCompaignToContribute, setSelectedCompaignToContribute] =
    useState<(COMPAIGN.Compaign & { amount: number }) | null>(null);

  /* -------------------------------------------------------------------------- */
  /*                                  FUNCTIONS                                 */
  /* -------------------------------------------------------------------------- */

  const openCompaignDetailsHandler = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>,
    compaign: COMPAIGN.Compaign
  ) => {
    if ((e.target as any).name === "contribute") {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setSelectedCompaign(compaign);
  };

  const contributeHandler = async () => {
    if (selectedCompaignToContribute) {
      const id = selectedCompaignToContribute.id;
      const amount = selectedCompaignToContribute.amount;
      try {
        console.log(amount, `${amount}`);
        const tx = await contract.connect(signer).contribute(id, {
          value: ethers.utils.parseUnits(`${amount}`, "wei"),
        });
        await tx.wait();
        success("You are a contributor of this project now!");
        window.location.href = "/compaigns";
        location.reload();
      } catch (err) {
        console.log(err.message);
        error(err.message);
      }
    }
  };

  const onContributeClick = (compaign: COMPAIGN.Compaign) => {
    setSelectedCompaignToContribute({ ...compaign, amount: 0 });
  };

  const fetchCampagins = async () => {
    if (contract) {
      try {
        let projects = await contract.getProjects();
        let campaigns: COMPAIGN.Compaign[] = [];
        for (let i = 0; i < projects.length; i++) {
          const {
            goal,
            title,
            story,
            requests,
            funds,
            owner,
            numOfContributers,
            contributors,
            maxReachTime,
            launchDay,
            tokenValue,
            icoToken,
            id,
          } = projects[i];
          campaigns.push({
            goal: goal.toNumber(),
            id: id.toNumber(),
            launchDay: new Date(launchDay.toNumber() as number),
            maxReachTime: new Date(maxReachTime.toNumber() as number),
            numOfContributers: numOfContributers.toNumber(),
            owner,
            story,
            title,
            icoToken,
            requests: requests.map((req) => ({
              description: req.description,
              recipient: req.recipient,
              status: req.status,
              id: req.id.toNumber(),
              approvalsNum: req.approvalsNum.toNumber(),
              amount: req.amount.toNumber(),
              voters: req.voters,
            })),
            funds: funds.toNumber(),
            contributors,
            tokenValue: tokenValue.toNumber(),
            contributed: Boolean(
              contributors.find(
                (item: string) => item.toLowerCase() === walletAddress
              ) || owner.toLowerCase() === walletAddress
            ),
          });
        }
        setCompaigns(campaigns);
      } catch (err) {
        console.log(err.message);
      }
    }

    setLoading(false);
  };
  /* -------------------------------------------------------------------------- */
  /*                                 USE EFFECT                                 */
  /* -------------------------------------------------------------------------- */
  React.useEffect(() => {
    fetchCampagins();
  }, [contract]);

  /* -------------------------------------------------------------------------- */
  /*                                 RENDER JSX                                 */
  /* -------------------------------------------------------------------------- */
  return (
    <div className="flex justify-center ">
      <div className="container py-10">
        <h1 className="head">All Compaigns ({compaigns.length})</h1>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
          {!loading && compaigns && (
            <>
              {
                <Modal
                  isOpen={Boolean(selectedCompaign)}
                  closeModal={() => setSelectedCompaign(null)}
                >
                  {selectedCompaign && (
                    <CompaignFullDetails
                      onContribute={() => onContributeClick(selectedCompaign)}
                      compaign={selectedCompaign}
                    />
                  )}
                </Modal>
              }
              {
                <Modal
                  isOpen={Boolean(selectedCompaignToContribute)}
                  closeModal={() => setSelectedCompaignToContribute(null)}
                >
                  {selectedCompaignToContribute && (
                    <div className="z-50 flex flex-col gap-3">
                      <h1 className="text-white">
                        {selectedCompaignToContribute.title}
                      </h1>
                      <Detail
                        label="Amount"
                        value={
                          <div className="flex flex-col gap-2">
                            <input
                              className="input rounded-sm ring-2 ring-primary"
                              placeholder="Amount ETH"
                              type="number"
                              onChange={(e) =>
                                setSelectedCompaignToContribute((prev) => ({
                                  ...prev,
                                  amount: e.target.valueAsNumber,
                                }))
                              }
                            />
                            <p className="text-xs text-gray-300">
                              {selectedCompaignToContribute.tokenValue} Wei
                              worths 1 token
                            </p>
                            <button
                              className="btn w-fit"
                              onClick={contributeHandler}
                            >
                              Submit
                            </button>
                          </div>
                        }
                      />
                    </div>
                  )}
                </Modal>
              }
              {compaigns.map((compaign) => (
                <CompaignCard
                  key={compaign.id}
                  {...compaign}
                  onClick={(e) => openCompaignDetailsHandler(e, compaign)}
                  onContribute={() => onContributeClick(compaign)}
                />
              ))}
            </>
          )}
          {loading &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <CompaignLoadingCard key={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllCompaignsIndex;
