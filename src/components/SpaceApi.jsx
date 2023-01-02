import React, { useEffect, useState } from "react";

const SpaceApi = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const data = await result.json();
      const validData = data.filter((item, key) => {
        return key !== 0 && key !== 2 && key !== 7;
      });
      setNewsList(validData);
    };
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-6xl text-center mb-3">Space News</h1>
      <div className="text-center bg-gray-500 w-[300px] h-[500px] overflow-y-scroll rounded-3xl flex flex-col mb-5">
        {newsList.map((item, key) => {
          return (
            <div
              className="my-4 cursor-pointer"
              onClick={() => {
                window.location.href = item.url;
              }}
              key={key}
            >
              <h1 className="text-black font-bold my-3">{item.title}</h1>
              <div>
                <img src={item.imageUrl} alt="" />
              </div>
              <p className="my-5 text-black">{item.summary}</p>
              <h4 className="my-2 text-purple-800">
                Published : {item.publishedAt}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpaceApi;
