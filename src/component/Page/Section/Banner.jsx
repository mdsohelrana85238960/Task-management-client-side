import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://storage.googleapis.com/profit-prod/wp-content/uploads/2021/05/62a63d01-best-task-management-tools.jpg)'}}>
  
      <button className="btn btn-primary bg-red-700 text-xl btn-lg"> <Link to='/dashboard/addTasks'>Let’s Explore</Link> </button>
    </div>
  </div>

    
    );
};

export default Banner;