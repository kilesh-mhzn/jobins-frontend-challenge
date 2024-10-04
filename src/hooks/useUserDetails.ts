import { useEffect, useState } from "react";
import DashboardService, {
  TPersonalDetailsResponse,
} from "@services/dashboard.service";

const useUserDetails = () => {
  const [userDetails, setPersonalDetails] =
    useState<TPersonalDetailsResponse | null>(null);
  const [isFetchingPersonalDetail, setIsFetchingPersonalDetail] =
    useState<boolean>(false);

  useEffect(() => {
    const fetchDashboardMetrics = async () => {
      try {
        setIsFetchingPersonalDetail(true);
        const dashboardService = new DashboardService();
        const response = await dashboardService.getPersonalDetails();
        if (response && response.data) {
          setPersonalDetails(response.data);
        }
      } catch (error) {
        window.alert("Error fetching user details");
        console.log(error);
      } finally {
        setIsFetchingPersonalDetail(false);
      }
    };

    fetchDashboardMetrics();
  }, []);

  return { userDetails, isFetchingPersonalDetail };
};

export default useUserDetails;
