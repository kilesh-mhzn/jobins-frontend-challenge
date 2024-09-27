import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "@pages/error-page/error-page.tsx";
import Dashboard from "@pages/dashboard/dashboard.component.tsx";
import OrderManagement from "@pages/order-management/order-management.component.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/order-management",
        element: <OrderManagement />,
      },
      // {
      //   path: "/customers/:id",
      //   element: <CustomerDetail />,
      //   loader: customerDetailLoader,
      // },
    ],
  },
]);

export default router; 
