import React, { useState,useRef } from "react";
import {AiFillDelete,AiOutlineCheck,AiOutlineClose} from "react-icons/ai"

const Todo = () => {
  const [toList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const inputTask=useRef(null);

  const addTask = () => {
    setTodoList([...toList,{task:currentTask,completed:false}]);
    inputTask.current.value="";

  };

  const deleteTask = (task) => {
    setTodoList(toList.filter((item,key)=>{
        return key !==task
    }));
  };

  const completeTask = (item,task) => {
    setTodoList(toList.map((items,key)=>{
       return key===task || items.completed===true ? {task:items.task,completed:true} : {task:items.task,completed:false} ;
    }))
  };


  return (
    <div className="mb-6">
      <h1 className="text-6xl text-center"> Todo list app</h1>
      <div className="text-center bg-gray-500 w-[350px] min-h-[400px] rounded-3xl flex flex-col mt-5">
        <div className="mt-5">
          <input
          ref={inputTask}
            type="text"
            placeholder="Task.."
            className="mr-2 p-2 w-[60%] rounded-md text-black"
            onChange={(e) => setCurrentTask(e.target.value)}
            onKeyDown={(e)=>{if(e.keyCode===13)addTask()}}
          />
          <button
            onClick={addTask}
            className="p-2 rounded-xl bg-black w-[120px] hover:bg-slate-800 "
          >
            Add Task
          </button>
        </div>
        <div className="mt-5 h-full">
        
                {toList.map((item,k)=>{
                    return <div key={k} className="flex justify-center items-center space-x-2"><li className="w-[50%] list-none h-[30px] overflow-x-hidden bg-gray-800 rounded-md  my-2 " key={k}> {item.task} </li>
                    <button onClick={()=>completeTask(item.task,k)}  className="text-sm  h-[28px] rounded-lg w-[100px] bg-green-600 hover:bg-green-800">Completed</button> 
                    <button onClick={()=>deleteTask(k)} className="text-red-600 hover:text-red-800"><AiFillDelete size={25}/></button>
                    {item.completed ? (<h1><AiOutlineCheck className="text-green-500" size={25}/></h1>):(<h1><AiOutlineClose className="text-red-600" size={25}/></h1>)}
                    </div>
                })}
        
        </div>
      </div>
    </div>
  );
};

export default Todo;

 