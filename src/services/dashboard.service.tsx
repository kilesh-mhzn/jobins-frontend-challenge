import { apiClient, ApiResponse } from "@api";
import {
  TDashboardMetricsResponse,
  TPersonalDetailsResponse,
} from "@models/dashboard-metrics.model";

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
