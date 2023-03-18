import { DUMMY_COMPAIGNS } from "@/data/compaigns.dummy";
import React, { useState } from "react";
import Modal from "../shared/Modal";
import CompaignCard from "./CompaignCard";
import CompaignFullDetails from "./CompaignFullDetails";
import CompaignLoadingCard from "./CompaignCard/CompaignLoadingCard";

const AllCompaignsIndex = () => {
  /* -------------------------------------------------------------------------- */
  /*                                   STATES                                   */
  /* -------------------------------------------------------------------------- */
  const [compaigns, setCompaigns] = useState<COMPAIGN.Compaign[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [selectedCompaign, setSelectedCompaign] =
    useState<COMPAIGN.Compaign | null>(null);

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

  const contributeHandler = (id: number) => {
    // TODO: implement contribute handler
    console.log("contributeHandler");
    console.log(`You clicked ${id}`);
  };

  /* -------------------------------------------------------------------------- */
  /*                                 USE EFFECT                                 */
  /* -------------------------------------------------------------------------- */
  React.useEffect(() => {
    // TODO: fetch compaigns from server
    setTimeout(() => {
      setCompaigns(DUMMY_COMPAIGNS);
      setLoading(false);
    }, 1000);
  }, []);

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
                      onContribute={() =>
                        contributeHandler(selectedCompaign.id)
                      }
                      compaign={selectedCompaign}
                    />
                  )}
                </Modal>
              }
              {compaigns.map((compaign) => (
                <CompaignCard
                  key={compaign.id}
                  {...compaign}
                  onClick={(e) => openCompaignDetailsHandler(e, compaign)}
                  onContribute={() => contributeHandler(compaign.id)}
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
