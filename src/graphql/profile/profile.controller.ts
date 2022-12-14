import { GraphQLError } from "graphql";
import { CreateProfileDTO, IProfile, ProfileResponse } from "./profile.model";
import { _create, _findAll } from "./profile.service";
import { validateProfileData } from "./profile.validator";

const createProfile = async (
  input: CreateProfileDTO
): Promise<ProfileResponse> => {
  const { error, value } = validateProfileData(input);
  if (error) {
    throw new GraphQLError(error.message, {
      extensions: {
        result: false,
      },
    });
  }
  return await _create(value);
};

const getAllProfiles = async (): Promise<IProfile[]> => {
  return await _findAll();
};

export { createProfile, getAllProfiles };
