import { BaseContext } from "@apollo/server";
// import { profiles } from "../mock";
import { CreateProfileDTO } from "./profile.model";
import { createProfile } from "./profile.controller";

export const mProfile = `
    extend Mutation {
        createProfile(input: CreateProfileDTO!): ProfileResponse!
    }
`;

export const mutProfile = {
  Mutation: {
    createProfile: async (
      _: any,
      { input }: { input: CreateProfileDTO },
      context: BaseContext
    ) => await createProfile(input),
  },
};
