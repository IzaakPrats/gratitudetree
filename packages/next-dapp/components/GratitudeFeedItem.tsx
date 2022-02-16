import { GratitudeFeedItemData } from "./data";
import { getShortAddress } from "../utils/formatters";
import Image from "next/image";

type GratitudeFeedItemProps = {
  data: GratitudeFeedItemData;
};

const GratitudFeedItem = ({ data }: GratitudeFeedItemProps) => {
  return (
    <div className="p-8 w-full space-x-4 max-w-xl flex flex-row justify-between	border shadow rounded-lg text-slate-600 bg-white">
      <div>
        <p className="font-bold text-lg">{data.title}</p>
        <p className="italic">
          Thoughtfully written by{" "}
          <a
            href={`https://goerli.etherscan.io/address/${data.creator}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="px-2 py-1 rounded text-white font-bold bg-orange-400 hover:bg-orange-200">
              {getShortAddress(data.creator)}
            </span>
          </a>
        </p>
        <p className="my-4">{data.message}</p>
        <p className="my-2 italic">{data.location}</p>
      </div>
      <div className="flex flex-col justify-between">
        <a
          className="px-4 py-2 hover:bg-indigo-400 hover:text-white rounded-lg font-bold shadow"
          href={data.link}
          target="_blank"
          rel="noreferrer"
        >
          Opensea
        </a>
        <div className="text-center">
          <a
            className="font-bold px-4 py-2 hover:bg-red-200 rounded-lg shadow"
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
          >
            Like
          </a>
        </div>
      </div>
    </div>
  );
};

export default GratitudFeedItem;
