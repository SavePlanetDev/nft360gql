export const tdRegister = `
    type RegisterData {
        userId: ID!
        username: String!
        email: String!
        walletAddress: String!
        firstname: String
        lastname: String
        statusSub: Boolean!
        active: Boolean!
    }

    type RegisterResponse {
        username: String!
        result: Boolean!
        msg: String
        registration: RegisterData
    }

    input CreateRegisterDTO {
        userId: ID!        
        username: String!
        email: String!
        walletAddress: String!
    } 
`;
