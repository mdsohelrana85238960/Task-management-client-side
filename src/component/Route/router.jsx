import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Page/Home";
import Login from "../Page/Section/Login";
import Register from "../Page/Section/Register";
import Dashboard from "../Dashbord/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Page/Section/ErrorPage";
import AddTasks from "../Dashbord/AddTasks";
import TasksManagement from "../Dashbord/TasksManagement";
import UpdateTasks from "../Dashbord/UpdateTasks";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
      
      ]
    },

    {
      path:'/dashboard',
      errorElement:<ErrorPage></ErrorPage>,
      element:<PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
      children:[
        {
          path:'addTasks',
          element:<AddTasks></AddTasks>
        },
        {
          path:'management',
          element:<TasksManagement></TasksManagement>
        },
        {
          path:'update/:id',
          element:<UpdateTasks></UpdateTasks>
         
        },
       
      ]
    }






  ]);

export default router;