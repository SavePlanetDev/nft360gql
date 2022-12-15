import { dbSubscriptions } from "../../database";
import {
  ISubscription,
  CreateSubscriptionDTO,
  SubscriptionResponse,
} from "./subscription.model";

const _create = async (
  input: CreateSubscriptionDTO
): Promise<SubscriptionResponse> => {
  const ref = dbSubscriptions.doc(input.userId);
  const doc = await ref.get();

  const subscription: ISubscription = {
    userId: input.userId,
    planId: input.planId,
    startDate: new Date().getTime(),
    endDate: new Date().getTime() + 86400,
    status: false,
  };

  if (!doc.exists) {
    await ref.set(subscription);
    return {
      userId: input.userId,
      planId: input.planId,
      result: true,
      msg: "create new subscription successfully",
      subscription: subscription,
    } as SubscriptionResponse;
  } else {
    return {
      userId: input.userId,
      planId: input.planId,
      result: false,
      msg: `${input.userId} already has subscription data`,
      subscription: {
        userId: doc.id,
        ...doc.data(),
      } as SubscriptionResponse,
    };
  }
};
export { _create };
