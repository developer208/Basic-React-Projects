import React from 'react'
import { useContext } from 'react';
import { stateContext } from '../helpers/Contexts';

const Finish = () => {
    const { state, setState, userName,setuserName, score, setScore } =
    useContext(stateContext);

    const restart=()=>{
        setScore(0);
        setState("menu");
        setuserName("");
    }


  return (
    <div className='text-black'>
      <h1 className='text-2xl'>Quiz Finished</h1>
      <p className='text-black my-5 font-bold'>Participant :- {userName}</p>
      <div className="mt-4 text-white mx-auto w-[40px] py-[9px] bg-black rounded-full">{score}/2</div>
      <button onClick={()=>{restart()}} className="mt-10  w-[40%] text-white rounded-md py-2 bg-gray-700 hover:bg-gray-800 " >Restart Quiz</button>
    </div>
  )
}

export default Finish
