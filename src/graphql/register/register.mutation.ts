import { BaseContext } from "@apollo/server";
import { registers } from "../mock";
import { IRegister, CreateRegisterDTO } from "./register.model";
import { validateRegisterData } from "./register.validator";

export const mRegister = `
   extend type Mutation {
        createRegister(input: CreateRegisterDTO!): RegisterResponse!
    }
`;

export function createRegister(input: CreateRegisterDTO) {
  registers.push({
    userId: input.userId,
    username: input.username,
    email: input.email,
    walletAddress: input.walletAddress,
    statusSub: false,
    active: true,
  } as IRegister);
  return {
    userId: input.userId,
    username: input.username,
    email: input.email,
    walletAddress: input.walletAddress,
    statusSub: false,
    active: true,
  };
}

function createRegisterHandler(input: CreateRegisterDTO) {
  const { error, value } = validateRegisterData(input);
  if (error) {
    throw new Error(error.message);
  }
  createRegister(value);
  return {
    username: input.username,
    result: true,
    msg: "OK",
  };
}

export const mutRegister = {
  Mutation: {
    createRegister: (
      _: any,
      { input }: { input: CreateRegisterDTO },
      context: BaseContext
    ) => createRegisterHandler(input),
  },
};
