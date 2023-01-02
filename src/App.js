import React from "react";
import Login from "./components/Login";
import Quiz from "./components/Quiz";
import Todo from "./components/Todo";
import SpaceApi from "./components/SpaceApi";
import VideoGame from "./components/VideoGame";


function App() {



  return (
    <div className="w-[100%] h-[100%] flex flex-col  justify-center items-center">
      <h1 className="text-7xl text-center text-purple-800">Basic React Projects</h1>
      <hr className="text-white h-1 w-[80%] my-5" />
      <Login />
      <hr className="text-white h-1 w-[80%] my-5" />
      <Todo />
      <hr className="text-white h-1 w-[80%] my-5" />
      <Quiz/>
      <hr className="text-white h-1 w-[80%] my-5" />
      <SpaceApi/>
      <hr className="text-white h-1 w-[80%] my-5" />
      <VideoGame/>
      <hr className="text-white h-1 w-[80%] my-5" />



    </div>

  );
}

export default App;
