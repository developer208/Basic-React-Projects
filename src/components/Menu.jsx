import React from 'react';
import { useContext } from 'react';
import {stateContext} from "../helpers/Contexts";
import { useRef } from 'react';


const Menu = () => {
  const {state,userName,setState,setUserName}=useContext(stateContext);
  const ip=useRef(null);

  const change=()=>{
    if(ip.current.value!==""){
      setState("playing");
    }
  }

  return (
    <div className=' text-black flex flex-col items-center space-y-2 '>
        <label className='font-bold' >Enter Your Name :- </label>
        <input ref={ip} onChange={(e)=>setUserName(e.target.value)} className='box-border pl-2 w-[70%] h-[40px] rounded-md' type="text" placeholder='Ex.Vedang Mule' />
        <button onClick={()=>{change()}} className='cursor-pointer w-[70%] h-[40px] text-white rounded-md bg-black  hover:bg-slate-800'>Start Quiz</button>
      
    </div>
  )
}

export default Menu
