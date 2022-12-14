import { BaseContext } from "@apollo/server";
import { getAllProfiles } from "./profile.controller";

const qProfile = `
  extend type Query {
    getAllProfiles: [ProfileData]
  }
`;

const resProfile = {
  Query: {
    getAllProfiles: async (_: any, __: any, context: BaseContext) =>
      getAllProfiles(),
  },
};

export { qProfile, resProfile };
