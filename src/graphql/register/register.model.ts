export interface IRegister {
  userId: string;
  username: string;
  firstname?: string;
  lastname?: string;
  email: string;
  walletAddresses?: string[];
  statusSub: boolean;
  active: boolean;
}

export interface CreateRegisterDTO {
  userId: string;
  username: string;
  email: string;
  walletAddress: string;
}
