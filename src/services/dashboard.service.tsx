import { apiClient, ApiResponse } from "../api/client";

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

class DashboardService {
  private readonly GET_DASHBOARD_METRICS: string = "dashboard-metrics.json";
  private readonly GET_PERSONAL_DETAILS: string = "personal-detail.json";
  constructor() {}

  getDashboardMetrics(): Promise<ApiResponse<TDashboardMetricsResponse>> {
    const response = apiClient.get<TDashboardMetricsResponse>(
      `${this.GET_DASHBOARD_METRICS}`
    );
    return response;
  }

  getPersonalDetails(): Promise<ApiResponse<TPersonalDetailsResponse>> {
    const response = apiClient.get<TPersonalDetailsResponse>(
      `${this.GET_PERSONAL_DETAILS}`
    );
    return response;
  }
}

export default DashboardService;
