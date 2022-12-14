import { dbProfiles } from "../../database";
import { CreateProfileDTO, IProfile, ProfileResponse } from "./profile.model";

const _create = async (input: CreateProfileDTO): Promise<ProfileResponse> => {
  const ref = dbProfiles.doc(input.userId);
  const doc = await ref.get();
  const profile = {
    ...input,
    NFTOwned: 0,
    collectionOwned: 0,
    totalValue: 0,
    PL24Hr: 0,
    PL7D: 0,
    nftAddresses: [],
  };

  if (!doc.exists) {
    await ref.set(profile);
    return {
      userId: input.userId,
      result: true,
      msg: `userId: ${input.userId}, successfully registered!`,
      profile,
    };
  } else {
    return {
      userId: input.userId,
      result: false,
      msg: `userId: ${input.userId}, is already existed!`,
      profile: {
        userId: doc.id,
        ...doc.data(),
      },
    } as ProfileResponse;
  }
};

const _findAll = async (): Promise<IProfile[]> => {
  const snapshot = await dbProfiles.get();
  const data: IProfile[] = snapshot.docs.map((snap) => {
    return {
      userId: snap.id,
      ...snap.data(),
    } as IProfile;
  });

  return data;
};

export { _create, _findAll };
