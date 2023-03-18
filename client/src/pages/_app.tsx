import Layout from "@/components/layout/Layout";
import { INFO } from "@/constants/info";
import ContextProvider from "@/context/global.context";
import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <NextSeo
          titleTemplate={`${INFO.TITLE} | %s`}
          description={INFO.DESCRIPTION}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </>
  );
}
