import ReactDOM from "react-dom/client";
import { appRouter } from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore.js";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <CartContextProvider>
          <RouterProvider router={appRouter} />
        </CartContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  </Provider>
);
