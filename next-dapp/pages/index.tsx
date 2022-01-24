import { useAccount, useConnect, useNetwork } from "wagmi";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/Home.module.css";

const getShortAddress = (address: string) => {
  return `${address.substring(0, 4)}...${address.substring(
    address.length - 4
  )}`;
};

const ConnectorComponent = () => {
  const [{ data, error }, connect] = useConnect();
  return (
    <div>
      {data.connectors.map((x) => (
        <button
          className={styles.connectorButton}
          key={x.id}
          onClick={() => {
            connect(x);
          }}
          suppressHydrationWarning
        >
          {x.name}
          {!x.ready && " (unsupported)"}
        </button>
      ))}

      {error && <div>{error?.message ?? "Failed to connect"}</div>}
    </div>
  );
};
//@ts-ignore
const AccountComponent = ({ accountData, error, loading, disconnect }) => {
  const canProgrammaticallyDisconnect = () => {
    return accountData.connector.name !== "MetaMask";
  };

  return (
    <div className={styles.container}>
      <p>
        {accountData.ens?.name
          ? accountData.ens.name
          : getShortAddress(accountData.address)}
      </p>
      <p>Connected to {accountData.connector.name}</p>
      {canProgrammaticallyDisconnect() ? (
        <button className={styles.cta} onClick={disconnect}>
          Disconnect
        </button>
      ) : (
        <p>Disconnect your account directly through Metamask</p>
      )}

      {error && <p>{error?.message ?? "Failed to disconnect"}</p>}
    </div>
  );
};

const Home: NextPage = () => {
  const [{ data: accountData, error, loading }, disconnect] = useAccount({
    fetchEns: true,
  });
  const [{ data: networkData }] = useNetwork();
  const [currentAccount, setCurrentAccount] = useState<string | undefined>("");
  const [currentChainId, setCurrentChainId] = useState<number>();

  useEffect(() => {
    console.log("accountData1", accountData);
    setCurrentAccount(accountData?.address);
    setCurrentChainId(networkData?.chain?.id);
  }, []);

  useEffect(() => {
    console.log("accountData2", accountData);
    const accountAddress = accountData?.address;
    if (accountAddress && accountAddress !== currentAccount) {
      setCurrentAccount(accountAddress);
      toast(
        `Account switched to ${getShortAddress(accountAddress) ?? "undefined"}`,
        { autoClose: 2000 }
      );
    }
  }, [accountData]);

  useEffect(() => {
    const chainId = networkData?.chain?.id;
    if (chainId && chainId !== currentChainId) {
      const unsupported = networkData.chain.unsupported;
      setCurrentChainId(chainId);
      toast(`Chain switched to ${networkData.chain.name}.`, {
        autoClose: 2000,
      });
    }
  }, [networkData]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ToastContainer />
        <h1 className={styles.title}>Welcome to your new DApp</h1>
        <div className={styles.connectorContainer}>
          <div className={styles.containerPadding}>
            {accountData ? (
              <AccountComponent
                accountData={accountData}
                error={error}
                loading={loading}
                disconnect={disconnect}
              />
            ) : (
              <ConnectorComponent />
            )}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
