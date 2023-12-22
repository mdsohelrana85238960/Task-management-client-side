
import { useQuery } from "@tanstack/react-query";

import useAuth from "../Hook/useAuth";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useAxiosPublic from "../Hook/useAxiosPublic";



const TasksManagement = () => {
    const AxiosPublic = useAxiosPublic()
const {user} = useAuth()
    const {data: userTasks = [], refetch} = useQuery({
        queryKey:['tasks', user?.email],
        queryFn: async () =>{
            const res = await AxiosPublic.get(`/tasks/${user?.email}`);
            return res.data;
        }
    })
    console.log(userTasks)

    const handleDeleteTasks = (task) =>{
        console.log(task)
        AxiosPublic.delete(`/tasks/${task}`)
        .then(res =>{
            console.log(res);
            if (res.data.deletedCount>0) {
                refetch();
                swal("Good job!", "delete Successfully!", "success");
            }
        } )
    }

    return (
        <div className="mb-16 flex gap-12 justify-between">

          <div className="flex-1 bg-slate-300 rounded-xl">
          <h1 className="text-3xl">To do list</h1>
          {
                userTasks?.map(task =>  <div key={task?._id} draggable className="card m-2 w-96 bg-blue-300 text-black ">
                    
                <div className="card-body">
                  <h2 className="card-title">{task?.title}</h2>
                  <p>{task?.description}</p>
                  <div className="flex justify-between">
                    <h1> {task?.deadline} </h1>
                    <h1> {task?.priority} </h1>
                  </div>
                  <div className="card-actions  justify-end">
                  <button  onClick={() => handleDeleteTasks(task?._id)} className="btn   "><MdDelete /> </button>
                  <Link to= {`/dashboard/update/${task?._id}`} >  <button  className="btn  "> <FaEdit></FaEdit> </button> </Link>
                  </div>
                </div>
              </div> )
              
            }
         
          </div>

          <div className="flex-1 bg-slate-300 rounded-xl">
          <h1 className="text-3xl">Ongoing</h1>
          
          </div>

          <div className="flex-1 bg-slate-300 rounded-xl">
          <h1 className="text-3xl">Completed</h1>
          
          </div>
            
        </div>
    );
};

export default TasksManagement;

