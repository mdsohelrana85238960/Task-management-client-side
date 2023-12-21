import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./component/Route/router";
import AuthProvider from "./component/Provider/AuthProvider";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);