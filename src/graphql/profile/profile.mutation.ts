import { BaseContext } from "@apollo/server";
import { profiles } from "../mock";

export const mProfile = `
    extend Mutation {
        createProfile(input: CreateProfileDTO!): ProfileResponse!
    }
`;

interface CreateProfileDTO {
  userId: string;
  walletAddress: string;
}

export function createProfile(input: CreateProfileDTO) {
  profiles.push({
    userId: input.userId,
    walletAddress: input.walletAddress,
    NFTOwned: 0,
    collectionOwned: 0,
    totalValue: 0,
    PL24Hr: 0,
    PL7D: 0,
    nftAddress: [],
  });

  return {
    userId: input.userId,
    walletAddress: input.walletAddress,
    NFTOwned: 0,
    collectionOwned: 0,
    totalValue: 0,
    PL24Hr: 0,
    PL7D: 0,
    nftAddress: [],
  };
}

export const mutProfile = {
  Mutation: {
    createProfile: (
      _: any,
      { input }: { input: CreateProfileDTO },
      context: BaseContext
    ) => {
      const profile = createProfile(input);
      return {
        userId: profile.userId,
        result: true,
        msg: "OK",
      };
    },
  },
};
