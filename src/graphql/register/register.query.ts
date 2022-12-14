import { registers } from "../mock";
const qRegister = `
    extend type Query {
        getAllRegister: [RegisterData]
        getRegisterByUserId(userId: String!): RegisterData
    } 
`;

const resRegister = {
  Query: {
    getAllRegister: () => registers,
  },
};

export { qRegister, resRegister };
