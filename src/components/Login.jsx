import React,{ useState } from 'react'

const Login = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [height, setHeight] = useState();
    const [superp, setSuperp] = useState("");
    const [dis, setDis] = useState(false);

  return (
    <div>
         <h1 className="text-6xl text-center mb-3" > Login Form</h1>
      <div className="text-center bg-gray-500 w-[350px] min-h-[400px] rounded-3xl flex flex-col  mb-10">
        <div>
          <div className="flex  my-[20px]">
            <label typeof="text" className=" mx-[20px] font-bold text-black">Name :</label>
            <input type="text" className="box-border pl-2 w-[60%] ml-3 text-black" onChange={(e) => setName(e.target.value)} />

          </div>
          <div className="flex flex-col space-y-2 ">
            <div className="flex ">
              <label typeof="text" className="mx-[20px] font-bold text-black">Age :</label>
              <input type="number" className="box-border pl-2 w-[11%] ml-7 text-black" onChange={(e) => setAge(e.target.value)} />

            </div>
            <div className="flex ">
              <label typeof="text" className="mx-[20px] font-bold text-black">Height :</label>
              <input type="number" className="box-border pl-1 w-[11%] ml-2 text-black" onChange={(e) => setHeight(e.target.value)} />

            </div>
          </div>
          <div className="flex  my-[20px]">
            <label typeof="text" className="mx-[20px] font-bold text-black">Address :</label>
            <input type="text" className="box-border pl-2 w-[60%]  text-black" onChange={(e) => setSuperp(e.target.value)} />

          </div>
        </div>

        <button onClick={() => setDis(true)} className="p-2 rounded-xl bg-black w-[120px] hover:bg-slate-800 mx-auto">Display</button>
        <div className=" text-center text-black" >
          {dis && name !== "" && age !== "" && height !== "" && superp !== "" && (
            <ul>
              <li>Name: {name}</li>
              <li>Age : {age}</li>
              <li>Height : {height}</li>
              <li>Address : {superp}</li>
            </ul>
          )}


        </div>
      </div>
      
    </div>
  )
}

export default Login
