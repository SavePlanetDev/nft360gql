export const tdProfile = `
    type ProfileData {
        userId: ID!
        walletAddress: String!
        NFTOwned: Int
        collectionOwned: Int
        totalValue: Int
        PL24Hr: Int
        PL7D: Int
        nftAddresses: [String!]
    }

    type ProfileResponse {
        userId: String!
        result: Boolean!
        msg: String
    }

    input CreateProfileDTO {
        userId: ID!
        walletAddress: String!
    }
`;
