import { GratitudeFeedItem } from "../components";

const testFeedItem = () => {
  return (
    <GratitudeFeedItem
      title="New Friendships"
      message="Grateful for new friendships. Grateful for conferences built for like-minded people to gather and share."
      location="Denver, CO"
      openseaLink="http://www.google.com"
    />
  );
};

const Feed = () => {
  return (
    <div className="m-auto flex flex-col items-center my-8 space-y-4">
      {testFeedItem()}
      {testFeedItem()}
      {testFeedItem()}
    </div>
  );
};

export default Feed;
