export interface ISubscription {
  userId: string;
  planId: number;
  startDate?: number;
  endDate?: number;
  status?: boolean;
}

export interface SubscriptionResponse {
  userId: string;
  planId: number;
  result: boolean;
  msg?: string;
  subscription: ISubscription;
}

export interface CreateSubscriptionDTO {
  userId: string;
  planId: number;
}
