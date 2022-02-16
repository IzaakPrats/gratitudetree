import { GratitudeFeedItemData } from "./data";

type GratitudeFeedItemProps = {
  data: GratitudeFeedItemData;
};

const GratitudFeedItem = ({ data }: GratitudeFeedItemProps) => {
  return (
    <div className="p-8 w-full max-w-xl flex flex-row justify-between	border shadow rounded-lg text-slate-600">
      <div>
        <p className="font-bold">{data.title}</p>
        <p>{data.message}</p>
        <p className="italic">{data.location}</p>
      </div>
      <div>
        <a
          className="px-4 py-2 bg-indigo-400 hover:bg-indigo-200 rounded-lg text-white font-bold shadow"
          href={data.link}
          target="_blank"
          rel="noreferrer"
        >
          Opensea
        </a>
      </div>
    </div>
  );
};

export default GratitudFeedItem;
