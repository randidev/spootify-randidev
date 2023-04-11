import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import "@/styles/scss/_main.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}