type GratitudeFeedItemProps = {
  title: string;
  message: string;
  location: string;
  openseaLink: string;
};

const GratitudFeedItem = ({
  title,
  message,
  location,
  openseaLink,
}: GratitudeFeedItemProps) => {
  return (
    <div className="p-8 w-full max-w-xl flex flex-row justify-between	 border shadow rounded-lg text-slate-600">
      <div>
        <p className="font-bold">{title}</p>
        <p>{message}</p>
        <p className="italic">{location}</p>
      </div>
      <div>
        <a
          className="px-4 py-2 bg-indigo-400 hover:bg-indigo-200 rounded-lg text-white font-bold"
          href={openseaLink}
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
