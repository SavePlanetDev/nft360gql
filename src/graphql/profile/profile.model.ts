export interface IProfile {
  userId: string;
  walletAddress: string;
  NFTOwned?: number;
  CollectionOwned?: number;
  TotalValue?: number;
  PL24?: number;
  PL7?: number;
  nftAddresses: string[];
}

export interface ProfileResponse {
  userId: string;
  result: boolean;
  msg?: string;
  profile: IProfile;
}

export interface CreateProfileDTO {
  userId: string;
  walletAddress: string;
}
