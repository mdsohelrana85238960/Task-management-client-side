import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./component/Route/router";
import AuthProvider from "./component/Provider/AuthProvider";
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  </QueryClientProvider>
  </AuthProvider>
</React.StrictMode>
);
