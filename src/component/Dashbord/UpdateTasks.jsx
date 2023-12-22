
import swal from "sweetalert";
import useAuth from "../Hook/useAuth";
import {  useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";

const UpdateTasks = () => {
    const AxiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const {user} = useAuth()
    const {id} = useParams();

    console.log(id)

    const {data: products =[] ,} = useQuery({
        queryKey:['products'],
        queryFn: async () =>{
            const res = await AxiosPublic.get(`/singleTasks/${id}`);
            return res.data;
        }
    })
  console.log(products)
    
 


    const handleUpdateTasks = (e) =>{
      e.preventDefault()
        const form = e.target
        const title = form.title.value;
        const description = form.description.value;
        const priority = form.priority.value;
        

        const tasks = {title,description,priority}
        console.log(tasks)

        AxiosPublic.put(`/tasks/${id}`, tasks)
        .then((response) => {
    console.log(response.data); 
    if (response.data.modifiedCount > 0) {
      swal("Product updated successfully");
    }
  })
  .catch((error) => {
    console.error('Error updating product:', error);
   
  });

    }

       
       
  


    return (
        
        <div className="my-20">


            <h1 className="text-center text-5xl font-bold underline "> Update Tasks</h1>
           <form onSubmit={handleUpdateTasks} >
            <div className="card-body grid md:grid-cols-2 gap-8">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title" 
                defaultValue= {products.title}
                placeholder="Title"
                className="input input-bordered"
                required
                
              />
            </div>

           <div className="form-control">
      <label className="label">
        <span className="label-text">Priority</span>
      </label>
      <select name="priority"  defaultValue=  {products.priority} className="select select-bordered" required>
        <option value="" disabled selected>Select priority</option>
        <option value="low">Low</option>
        <option value="medium">moderate</option>
        <option value="high">High</option>
      </select>
    </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description" 
                defaultValue=  {products.description}
                placeholder="Description"
                className="input input-bordered"
                required
                
              />
            </div>
            

                </div>
  
                <button className=" my-12 btn text-white bg-orange-500  flex justify-center w-96 mx-auto"> Update Tasks </button>
          </form>
          </div>
        
    );
};

export default UpdateTasks;