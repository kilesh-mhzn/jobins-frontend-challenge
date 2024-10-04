import { useEffect, useState } from "react";
import DashboardService, {
  TDashboardMetricsResponse,
} from "@services/dashboard.service";

const useDashboardMetrics = () => {
  const [metrics, setMetrics] = useState<TDashboardMetricsResponse | null>(
    null
  );
  const [isFetchingMetrics, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDashboardMetrics = async () => {
      try {
        setLoading(true);
        const dashboardService = new DashboardService();
        const response = await dashboardService.getDashboardMetrics();
        if (response && response.data) {
          setMetrics(response.data);
        }
      } catch (error) {
        window.alert("Error fetching dashboard metrics");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardMetrics();
  }, []);

  return { metrics, isFetchingMetrics };
};

export default useDashboardMetrics;
