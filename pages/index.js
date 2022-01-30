import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Model from "../components/Model";

export default function Home() {
  return (
    <div className="bg-gray-50 scrollbar-hide h-screen overflow-y-scroll">
      <Head>
        <title>Instagram 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* feed */}
      <Feed />
      {/* modal */}
      <Model />
    </div>
  );
}
