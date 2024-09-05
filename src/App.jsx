import { useEffect, useState } from "react";
import Leaderboard from "./Components/Leaderboard.jsx";
import Navbar from "./Components/Navbar.jsx";
import Topscore from "./Components/Topscore.jsx";

function App() {
  return (<>
  <div className="absolute w-[100%] h-[100%] bg-[#E7F0FE] overflow-visible md:overflow-hidden">
    <div className="w-[100%] relative h-[160px]">
      <Navbar/>
    </div>
    <div className="flex h-[80%] flex-wrap">
      <div className="w-[100%] md:w-[50%]">
        <Topscore/>
      </div>
      <div className="w-[100%] md:w-[50%]">
        <Leaderboard/>
      </div>
    </div>
  </div>
  </>);
}

export default App
