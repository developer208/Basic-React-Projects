import React, { useState } from "react";
import { Questions } from "../helpers/Questions";
import { useContext } from "react";
import { stateContext } from "../helpers/Contexts";

const Play = () => {
  const [currentQue, setCurrentQue] = useState(0);
  const [optionSelected, setOptionSelected] = useState("");
  const { state, setState, userName, score, setScore } =
    useContext(stateContext);

  const chooseOption = (option) => {
    setOptionSelected(option);
  };
  const nextQuestion = () => {
   
      if (Questions[currentQue].ans === optionSelected) {
        setCurrentQue(currentQue + 1);
        setScore(score + 1);
      } else {
        setCurrentQue(currentQue + 1);
      }
    
  };


  const finishQuiz=()=>{
    if (Questions[currentQue].ans === optionSelected) {
        setCurrentQue(currentQue + 1);
        setScore(score + 1);
      }
    setState("finished");
  }

  return (
    <div>
      <h1 className="text-black font-bold">{Questions[currentQue].prompt}</h1>
      <div className="mt-5 flex flex-col items-center space-y-3">
        <button
          onClick={() => chooseOption("optionA")}
          className="w-[70%] h-[40px] bg-slate-600 rounded-md hover:bg-slate-800"
        >
          {Questions[currentQue].optionA}
        </button>
        <button
          onClick={() => chooseOption("optionB")}
          className="w-[70%] h-[40px] bg-slate-600 rounded-md hover:bg-slate-800"
        >
          {Questions[currentQue].optionB}
        </button>
        <button
          onClick={() => chooseOption("optionC")}
          className="w-[70%] h-[40px] bg-slate-600 rounded-md hover:bg-slate-800"
        >
          {Questions[currentQue].optionC}
        </button>
        <button
          onClick={() => chooseOption("optionD")}
          className="w-[70%] h-[40px] bg-slate-600 rounded-md hover:bg-slate-800"
        >
          {Questions[currentQue].optionD}
        </button>
      </div>

      {currentQue === Questions.length - 1 ? (
        <button
          onClick={() => {
            finishQuiz();
          }}
          className="mt-10  w-[40%] rounded-md py-2 bg-blue-700 hover:bg-blue-900 "
        >
          Finsh Quiz
        </button>
      ) : (
        <button
          onClick={() => {
            nextQuestion();
          }}
          className="mt-10  w-[40%] rounded-md py-2 bg-blue-700 hover:bg-blue-900 "
        >
          Next{" "}
        </button>
      )}
      
      {/* <div className="mt-4 mx-auto w-[40px] h[40px] bg-black rounded-full">{score}/2</div> */}
    </div>
  );
};

export default Play;
