import { BaseContext } from "@apollo/server";
import { createRegister } from "../../register/register.controller";
import { createProfile } from "../../profile/profile.mutation";
import { CreateRegisterDTO } from "../../register/register.model";

export const mUserRegistration = `
    extend type Mutation {
        userRegistration(input: CreateRegisterDTO!): UserRegistrationResponse!
    }
`;

function userRegistration(input: CreateRegisterDTO) {
  const registered = createRegister(input);
  const profile = createProfile(input);
  return {
    result: true,
    msg: "OK",
    registration: registered,
  };
}

export const mutUserRegistration = {
  Mutation: {
    userRegistration: (_: any, { input }: any, context: BaseContext) =>
      userRegistration(input),
  },
};
