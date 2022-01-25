import { useConnect } from "wagmi";
import styles from "./styles/connect.module.css";

const Connect = () => {
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

export default Connect;
