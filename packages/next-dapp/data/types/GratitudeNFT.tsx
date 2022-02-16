import { BigNumber } from "ethers";

export type GratitudeData = {
  creator: string;
  title: string;
  message: string;
  location: string;
  timestamp: BigNumber;
};

export type GratitudeDataWithTokenId = {
  tokenId: BigNumber;
  creator: string;
  title: string;
  message: string;
  location: string;
  timestamp: BigNumber;
};
