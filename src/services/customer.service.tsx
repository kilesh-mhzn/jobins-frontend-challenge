import { apiClient, ApiResponse } from "@api";
import { Order, STATUS } from "@models/orders.model";

class CustomerService {
  private GET_ORDERS: string = "orders.json";

  constructor() {}
  getCustomerStatus = (customer: Order): STATUS => {
    return customer.status as STATUS;
  };
  async getCustomers({
    searchTerm = "",
  }: {
    searchTerm?: string;
  }): Promise<ApiResponse<Order[]>> {
    const response = await apiClient.get<Order[]>(`/${this.GET_ORDERS}`);
    const data = response.data;
    const customerData = data
      .map((customer: Order) => {
        return customer;
      })
      .filter((fd: Order) => {
        const searchTermsArray = searchTerm.toLowerCase().split(" ");

        return searchTermsArray.every((term) =>
          Object.values(fd).some((value) =>
            String(value).toLowerCase().includes(term)
          )
        );
      });
    return { ...response, data: customerData };
  }
}

export default CustomerService;
