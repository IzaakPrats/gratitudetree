import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import {
  Network,
  Connect,
  Account,
  GratitudeNftContractInfo,
  GratitudeNftMintContainer,
} from "../components";
import { getShortAddress } from "../utils";

const Home: NextPage = () => {
  const [{ data: accountData }] = useAccount();
  const [{ data: networkData }] = useNetwork();
  const [currentAccount, setCurrentAccount] = useState<string | undefined>("");

  useEffect(() => {
    setCurrentAccount(accountData?.address);
  }, []);

  useEffect(() => {
    const accountAddress = accountData?.address;
    if (accountAddress && accountAddress !== currentAccount) {
      setCurrentAccount(accountAddress);
    }
  }, [accountData]);

  return (
    <div>
      <Head>
        <title>Your DApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-12">
        {accountData && (
          <div className="bg-indigo-400 font-mono absolute bottom-0 right-0 p-4">
            <Account />
            <Network />
            {!networkData?.chain?.unsupported && <GratitudeNftContractInfo />}
          </div>
        )}
        <h1 className="text-center text-5xl">Gratitude Tree</h1>
        {!accountData && <Connect />}
        {accountData && !networkData?.chain?.unsupported && (
          <GratitudeNftMintContainer />
        )}
      </main>
    </div>
  );
};

export default Home;
