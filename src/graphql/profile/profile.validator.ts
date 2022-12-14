import Joi, { ValidationResult } from "joi";
import { CreateProfileDTO } from "./profile.model";

const schema = Joi.object({
  userId: Joi.string().not().empty(),
  walletAddress: Joi.string().pattern(new RegExp("^0x[a-fA-F0-9]{40}$")),
});

export const validateProfileData = (
  input: CreateProfileDTO
): ValidationResult<CreateProfileDTO> => {
  return schema.validate(input);
};
