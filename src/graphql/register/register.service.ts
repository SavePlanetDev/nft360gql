import { dbRegisters } from "../../database";
import { CreateRegisterDTO, RegisterResponse } from "./register.model";
import { registers } from "../mock";

const _create = async (input: CreateRegisterDTO): Promise<RegisterResponse> => {
  const ref = dbRegisters.doc(input.userId);
  const doc = await ref.get();
  const registration = {
    ...input,
    statusSub: false,
    active: true,
  };

  if (!doc.exists) {
    await ref.set(registration);
    return {
      userId: input.userId,
      result: true,
      msg: `userId: ${input.userId}, successfully registered!`,
      registration,
    };
  } else {
    return {
      userId: input.userId,
      result: false,
      msg: `userId: ${input.userId}, is already existed!`,
      registration: {
        userId: doc.id,
        ...doc.data(),
      },
    } as RegisterResponse;
  }
};

export { _create };
