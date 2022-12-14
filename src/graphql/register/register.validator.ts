import Joi, { ValidationResult } from "joi";
import { CreateRegisterDTO } from "./register.model";

const schema = Joi.object({
  userId: Joi.string().not().empty(),
  username: Joi.string().not().empty(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  walletAddress: Joi.string().pattern(new RegExp("^0x[a-fA-F0-9]{40}$")),
});

export const validateRegisterData = (
  input: CreateRegisterDTO
): ValidationResult<CreateRegisterDTO> => {
  return schema.validate(input);
};
