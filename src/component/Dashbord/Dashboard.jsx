import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const Dashboard = () => {
    const {user} = useAuth();
    console.log(user)
    return (
        <div className="flex">
            <div className="w-72 text-white min-h-screen bg-[#3d383d] ">
                <div className="bg-[#2d272d] py-8"> 
                {
            user ? <div className="flex items-center gap-4"> <img className="w-20 ml-2 rounded-full" src={user?.photoURL
            } alt="" /> <div> <span className="text-3xl font-medium"> {user?.displayName}</span>   </div> </div> : <>  </>
          }
          
                </div>
                <h1 className="text-2xl font-medium py-4 pl-4">General</h1>
        <hr/>

          <div className="p-4 font-medium list-none ">
                <li className="py-2">  <NavLink to='/dashboard/addTasks'>Add Tasks</NavLink></li>
                <li className="1">  <NavLink to='/dashboard/management'>Task Management Dashboard</NavLink></li>
                <li className="py-2">  <NavLink to='/'> Home </NavLink></li>
          </div>
          
          


        </div>
       
        
        <div className="flex-1 p-8">
           
                <Outlet></Outlet>
               
            </div>
        </div>
    );
};

export default Dashboard;