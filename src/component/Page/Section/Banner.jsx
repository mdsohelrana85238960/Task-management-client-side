import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  
      <button className="btn btn-primary"> <Link to='/dashboard'>Let’s Explore</Link> </button>
    </div>
  </div>

    
    );
};

export default Banner;