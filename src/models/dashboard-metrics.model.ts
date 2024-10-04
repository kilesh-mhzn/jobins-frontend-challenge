export type MetricsChange = "increased" | "decreased" | "balanced";

type Change = {
  value: string;
  status: MetricsChange;
};

export interface TotalSalesAndCosts {
  amount: string;
  change: Change;
}

export interface TotalProfit {
  amount: string;
  change: Change;
}

export interface CountryMetric {
  country: string;
  flag: string;
  value: string;
  change: Change;
}

export type TDashboardMetricsResponse = {
  totalSalesAndCosts: TotalSalesAndCosts;
  totalProfit: TotalProfit;
  countryMetrics: CountryMetric[];
};
interface PersonalInformation {
  name: string;
  email: string;
  contactNumber: string;
  dateOfBirth: string;
  memberSince: string;
}

interface ShippingAddress {
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

interface OrderSummary {
  totalOrder: string;
  completed: string;
  canceled: string;
}

export interface TPersonalDetailsResponse {
  personalInformation: PersonalInformation;
  shippingAddress: ShippingAddress;
  orderSummary: OrderSummary;
}