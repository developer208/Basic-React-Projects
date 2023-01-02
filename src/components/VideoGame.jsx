import React, { useState } from "react";
import useSWR from "swr";

const fetcher=(...args)=> fetch(...args).then(
    (res)=>res.json());

const VideoGame = () => {
  const [gameTitle, setGameTitle] = useState("");
  const [searchGames, setSearchGames] = useState([]);



  const {data}=useSWR(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3`,fetcher);



  const Games = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
      .then((res) => res.json())
      .then((data) => {
        setSearchGames(data);
      });
  };

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-6xl text-center">Video Game Api</h1>
      <div className="text-center bg-gray-500 w-[350px] min-h-[400px] rounded-3xl flex flex-col mt-5">
        <div className="flex flex-col items-center space-y-2 my-5 ">
          <h1 className="text-black font-bold text-xl">Search For A Game</h1>
          <input
            type="text"
            onChange={(e) => setGameTitle(e.target.value)}
            className="text-black box-border pl-2 w-[70%] h-[40px] rounded-md"
            placeholder="Minecraft..."
          />
          <button
            onClick={Games}
            className="cursor-pointer w-[70%] h-[40px] text-white rounded-md bg-black  hover:bg-slate-800"
          >
            Search Game Title
          </button>

          <div className="w-[95%] h-[100%] bg-slate-900 flex rounded-md  ">
            {searchGames.map((game, key) => {
              return (
                <div className="w-[100%] h-[100%]" key={key}>
                  <div className="w-[85%] mx-auto my-5  rounded-md bg-white  h-[100%]">
                    <h1 className="text-black font-bold">{game.external}</h1>
                    <div className="w-[100%] my-2">
                      <img className="mx-auto" src={game.thumb} alt="" />
                    </div>
                    <h3 className="text-black my-4">${game.cheapest}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <hr className="  w-[80%] my-5" />
          <div className="w-[95%]">
            <h1 className="text-black">Latest Deals</h1>
            <div className="w-[100%] h-[100%] bg-slate-900 flex rounded-md ">
              {data && data.map((game, key) => {
                return (
                  <div className="w-[100%] h-[100%]" key={key}>
                    <div className="w-[85%] mx-auto my-5  rounded-md bg-white  h-[100%]">
                      <h1 className="text-black font-bold">{game.title}</h1>
                      {/* <div className="w-[100%] my-2">
                        <img className="mx-auto" src={game.thumb} alt="" />
                      </div> */}
                      <h3 className="text-black my-2">Normal Price </h3>
                      <p className="text-black">${game.normalPrice}</p>
                      <h3 className="text-black my-2">Deal Price </h3>
                      <p className="text-black">${game.salePrice}</p>
                      <h3 className="text-purple-800">YOU SAVED {game.savings.substr(0,2)}% </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGame;
