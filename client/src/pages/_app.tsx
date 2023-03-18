import Layout from "@/components/layout/Layout";
import { INFO } from "@/constants/info";
import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        titleTemplate={`${INFO.TITLE} | %s`}
        description={INFO.DESCRIPTION}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
