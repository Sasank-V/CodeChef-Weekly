import Leaderboard from "./Components/Leaderboard.jsx";
import Navbar from "./Components/Navbar.jsx";
import Topscore from "./Components/Topscore.jsx";

function App() {
  return (<>
  <div className="absolute w-[100%] h-[100%] bg-[#E7F0FE]">
    <div className="w-[100%] relative h-[20%]">
      <Navbar/>
    </div>
    <div className="flex h-[80%] flex-wrap overflow-hidden">
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
