import { Button } from "@chakra-ui/react";
import { useConnect } from "wagmi";

const Connect = () => {
  const [{ data, error }, connect] = useConnect();

  return (
    <div>
      {data.connectors.map((x) => (
        <Button
          key={x.id}
          onClick={() => {
            connect(x);
          }}
          suppressHydrationWarning
        >
          {x.name}
          {!x.ready && " (unsupported)"}
        </Button>
      ))}

      {error && <div>{error?.message ?? "Failed to connect"}</div>}
    </div>
  );
};

export default Connect;
