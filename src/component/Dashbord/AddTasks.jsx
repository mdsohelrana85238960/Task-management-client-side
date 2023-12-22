
import { Helmet } from "react-helmet";
import swal from "sweetalert";
import useAuth from "../Hook/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hook/useAxiosPublic";


const AddTasks = () => {
    const AxiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const {user} = useAuth()
    const handleAddTasks = (e) =>{
        e.preventDefault()
        const form = e.target
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const email = user?.email;

        const tasks = {email,title,description,deadline,priority}
        console.log(tasks)

        AxiosPublic.post("/tasks", tasks)
        .then(res =>{
            console.log(res.data.insertedId)
            if (res.data.insertedId) {
                swal("Good job!", "insertedId Successfully!", "success");
                navigate('/dashboard/management')
            }

        })
    }
    return (
        
        <div className="my-20">

<Helmet >
            <title>Management | AddTasks</title>
            </Helmet>
            <h1 className="text-center text-5xl font-bold underline "> Add Tasks</h1>
           <form onSubmit={handleAddTasks} >
            <div className="card-body grid md:grid-cols-2 gap-8">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title" 
                placeholder="Title"
                className="input input-bordered"
                required
                
              />
            </div>

           <div className="form-control">
      <label className="label">
        <span className="label-text">Priority</span>
      </label>
      <select name="priority" className="select select-bordered" required>
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
                placeholder="Description"
                className="input input-bordered"
                required
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                name="deadline" 
                className="input input-bordered"
                required
                
              />
            </div>

                </div>
  
                <button className=" my-12 btn text-white bg-orange-500  flex justify-center w-96 mx-auto"> Add Tasks </button>
          </form>
          </div>
        
    );
};

export default AddTasks;