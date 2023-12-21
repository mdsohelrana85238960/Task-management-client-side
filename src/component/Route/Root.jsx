import { Outlet } from "react-router-dom";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto   overflow-hidden">

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;