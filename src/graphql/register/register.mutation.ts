import { BaseContext } from "@apollo/server";
import { CreateRegisterDTO } from "./register.model";
import { createRegister } from "./register.controller";

const mRegister = `
   extend type Mutation {
        createRegister(input: CreateRegisterDTO!): RegisterResponse!
    }
`;

const mutRegister = {
  Mutation: {
    createRegister: async (
      _: any,
      { input }: { input: CreateRegisterDTO },
      context: BaseContext
    ) => await createRegister(input),
  },
};

export { mRegister, mutRegister };
