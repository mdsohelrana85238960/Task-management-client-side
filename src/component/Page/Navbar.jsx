import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import swal from "sweetalert";


const Navbar = () => {
    const {user,logOut} = useAuth();

    const handleSignOut = () =>{
        logOut()
        .then(result => {
            console.log(result)
            swal("Good job!", "Logout Successfully!", "success");
        })
      }
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link className="" to='/'> Home </Link></li>
        <li><a className="" href="#tasks">Tasks</a></li>
        <li><a className=" " href="#calendar">Calendar</a></li>
        {
                    user ? <> </> : <li className="justify-center text-xl"> <Link to='/register'> Register </Link> </li>
                }
              {
                user ?  <>  <li onClick={handleSignOut} className="justify-center text-xl"> <Link > Logout </Link> </li>  </> :  <li className="justify-center text-xl"> <Link to='/login'> Login </Link> </li>
              }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl w-48"> <img src="https://logos.flamingtext.com/Word-Logos/management-design-stripes-name.gif" alt="" /> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link className="justify-center text-xl" to='/'> Home </Link></li>
        <li><a className="justify-center text-xl" href="#reports">Reports</a></li>
        <li><a className="justify-center text-xl" href="#calender">Calendar</a></li>
        {
                    user ? <> </> : <li className="justify-center text-xl"> <Link to='/register'> Register </Link> </li>
                }
              {
                user ?  <>  <li onClick={handleSignOut} className="justify-center text-xl"> <Link > Logout </Link> </li>  </> :  <li className="justify-center text-xl"> <Link to='/login'> Login </Link> </li>
              }
    </ul>
  </div>
  <div className="navbar-end">
        {
            user ? <> <span className="text-xl font-medium"> {user?.displayName}</span> <img className="w-12 ml-2 rounded-full" src={user?.photoURL
            } alt="" /> </> : <>  </>
          }
        </div>
</div>
    );
};

export default Navbar;