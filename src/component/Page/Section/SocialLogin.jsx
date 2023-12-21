
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../Hook/useAuth';
import { FcGoogle } from "react-icons/fc";




const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const location = useLocation();
  const navigate = useNavigate()

    
    
  
  
    
   const handleGoogleLogin = () =>{
    const from = location.state?.from?.pathname || '/' 
    googleLogin()
    .then(result => {
      console.log(result.user)
     
      
    
        swal("Good job!", "Login Successfully!", "success");
      navigate(from, {replace:true});
     
    
      
    })
    .catch(error => console.error(error))
   }


    return (
        <div>
            
            <div onClick={handleGoogleLogin} className=' border rounded-md p-1  flex  gap-2  justify-center  mt-4 text-3xl text-blue-700 font-bold'> <h1 > <span className='text-center text-4xl'><FcGoogle /></span> </h1> Google </div>

        </div>
    );
};

export default SocialLogin;