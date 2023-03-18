import CreateCompaignIndex from "@/components/compaigns/CreateCompaignIndex";
import { ROUTES } from "@/constants/routes";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";

const CreateCompaign: NextPage = () => {
  return (
    <>
      <NextSeo title={ROUTES.CREATE_COMPAIGN.title} />
      <CreateCompaignIndex />
    </>
  );
};

export default CreateCompaign;
