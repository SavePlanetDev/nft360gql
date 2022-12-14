// import { registers } from "../mock";
import { _create } from "./register.service";
import { CreateRegisterDTO, RegisterResponse } from "./register.model";
import { validateRegisterData } from "./register.validator";
import { GraphQLError } from "graphql";

const createRegister = async (
  input: CreateRegisterDTO
): Promise<RegisterResponse> => {
  const { error, value } = validateRegisterData(input);
  if (error) {
    throw new GraphQLError(error.message, {
      extensions: {
        result: false,
      },
    });
  } else {
    return await _create(value);
  }
};

export { createRegister };
