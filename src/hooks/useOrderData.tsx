import { useState, useEffect, useMemo, useCallback } from "react";
import CustomerService from "@services/customer.service";
import { Order } from "@models/orders.model";

export const useOrderData = () => {
  const [data, setData] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const customerService = useMemo(() => new CustomerService(), []);

  const fetchData = useCallback(
    async (term: string) => {
      try {
        setLoading(true);
        const response = await customerService.getCustomers({
          searchTerm: term,
        });
        setData(response.data);
      } catch (err) {
        console.log(err);

        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    },
    [customerService]
  );

  useEffect(() => {
    fetchData(searchTerm);
  }, [fetchData, searchTerm]);

  return { data, loading, error, searchTerm, setSearchTerm };
};
