import { registers } from "../mock";
export const qRegister = `
    extend type Query {
        getAllRegister: [RegisterData]
        getRegisterByUserId(userId: String!): RegisterData
    } 
`;

export const resRegister = {
  Query: {
    getAllRegister: () => registers,
  },
};
