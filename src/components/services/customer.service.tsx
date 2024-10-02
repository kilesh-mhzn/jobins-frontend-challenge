// import { User } from "models/customer.model";
enum STATUS {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
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
  private baseUrl: string = "users.json";

  constructor() {}
  getCustomerStatus = (customer: Customer): STATUS => {
    return customer.status as STATUS;
  };
  async getCustomers<T>({ searchTerm = "" }): Promise<T> {
    try {
      const response = await fetch(`/${this.baseUrl}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await response.json();
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
  // async getCustomer<T>(id: number): Promise<T> {
  //   try {
  //     const response = await fetch(`/${this.baseUrl}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     const customerDetail = data.filter(
  //       (customer: User) => customer.id === id
  //     );
  //     return customerDetail[0];
  //   } catch (error) {
  //     console.log(
  //       "🚀 ~ file: customer.service.tsx:28 ~ CustomerService ~ error:",
  //       error
  //     );
  //     throw new Error("Error fetching data");
  //   }
  // }
}

export default CustomerService;
