import React,{useState} from 'react';
import Menu from './Menu';
import {stateContext} from "../helpers/Contexts"
import Play from './Play';
import Finish from './Finish';

const Quiz = () => {
    //  ["menu","playing","finished"]
    const [state,setState]=useState("menu");
    const [userName,setUserName]=useState("");
    const [score,setScore]=useState(0);

  return (
    <div>
      <h1 className="text-6xl text-center mb-3" >Quiz App</h1>
      <div className='text-center bg-gray-500 w-[350px] min-h-[400px] rounded-3xl flex flex-col justify-center mt-5'>
        <stateContext.Provider value={{state,setState,userName,setUserName,score,setScore}} >
        {state==="menu"   && <Menu/>}
        {state==="playing" && <Play/>}
        {state==="finished" && <Finish/>}

        </stateContext.Provider>
      </div>
    </div>
  )
}

export default Quiz
