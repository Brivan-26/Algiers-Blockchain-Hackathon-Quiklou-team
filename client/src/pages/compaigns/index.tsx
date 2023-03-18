import AllCompaignsIndex from "@/components/compaigns/AllCompaignsIndex";
import { ROUTES } from "@/constants/routes";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title={ROUTES.COMPAIGNS_HOME.title} />
      <AllCompaignsIndex />
    </>
  );
};

export default Home;
