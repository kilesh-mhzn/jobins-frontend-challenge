import { apiClient } from "../api/client";

export enum STATUS {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export type Customer = {
  id: string;
  customerName: string;
  date: string;
  total: string;
  method: string;
  status: keyof typeof STATUS;
};

class CustomerService {
  private GET_ORDERS: string = "orders.json";

  constructor() {}
  getCustomerStatus = (customer: Customer): STATUS => {
    return customer.status as STATUS;
  };
  async getCustomers({
    searchTerm = "",
  }: {
    searchTerm?: string;
  }): Promise<Customer[]> {
    try {
      const response = await apiClient.get<Customer[]>(`/${this.GET_ORDERS}`);
      const data = response.data;
      const customerData = data
        .map((customer: Customer) => {
          return customer;
        })
        .filter((fd: Customer) => {
          const searchTermsArray = searchTerm.toLowerCase().split(" ");

          return searchTermsArray.every((term) =>
            Object.values(fd).some((value) =>
              String(value).toLowerCase().includes(term)
            )
          );
        });
      return customerData;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching data");
    }
  }
}

export default CustomerService;
