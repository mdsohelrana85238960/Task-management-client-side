import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import swal from "sweetalert";


const Dashboard = () => {
    const {user,logOut} = useAuth();
    console.log(user)
    

    const handleSignOut = () =>{
        logOut()
        .then(result => {
            console.log(result)
            swal("Good job!", "Logout Successfully!", "success");
        })
      }
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
            <h1 className="btn btn-ghost w-full bg-[#5B81A3]">  <NavLink to='/dashboard/addTasks'>Add Tasks</NavLink> </h1>
            <button className="btn  w-full btn-ghost my-4 bg-[#5B81A3] ">  <NavLink to='/dashboard/management'>Task Management Dashboard</NavLink> </button>
             <hr className="mb-4" />
             
            <button className="btn mb-4 w-full btn-ghost bg-[#5B81A3]">  <NavLink to='/'> Home </NavLink> </button>
            <button onClick={handleSignOut} className="btn  w-full btn-ghost bg-[#5B81A3]">  <NavLink > Logout </NavLink> </button>
        
            
          </div>
         
          
          


        </div>
       
        
        <div className="flex-1 p-8">
           
                <Outlet></Outlet>
               
            </div>
        </div>
    );
};

export default Dashboard;