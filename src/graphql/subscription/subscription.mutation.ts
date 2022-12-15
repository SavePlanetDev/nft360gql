import { BaseContext } from "@apollo/server";
export const mSubscription = `
    extend type Mutation {
        createSubscription(input: SubscriptionData): SubscriptionResponse!
    }
`;

export const mutSubscription = {
  Mutation: {
    createSubscription: async (
      _: any,
      { input }: any,
      context: BaseContext
    ) => {},
  },
};
