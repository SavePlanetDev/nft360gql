export const tdSubscription = `
    type SubscriptionData {
        userId: String!
        planId: String!
        startDate: Int! 
        endDate: Int!
        status: Boolean!
    }

    type SubscriptionResponse {
        userId: String!
        planId: String!
        result: Boolean!
        msg: String
        subscription: SubscriptionData
    }

    input CreateSubscriptionDTO {
        userId: String!
        planId: String!
    }
`;
