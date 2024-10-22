import React from "react";

const HomePage = () => {
  return (
    <div className="h-[calc(100vh-50px)] flex justify-center items-center">
      <div className="flex flex-col gap-2 w-[1200px] pb-[140px]">
        <h1 className="text-[50px] text-gray-400 uppercase font-bold text-center ">
          Draw ,write and create anything on board with friends
        </h1>
        <h2 className="text-[25px] text-red font-semibold text-center">
          Collabarate with your friends or team and unlock the potential
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
