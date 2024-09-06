import { useState } from "react";
import backArrow from "../assets/Navbar/Back-Arrow.png";
import fourDots from "../assets/Navbar/Four-Dots.png";

const Navbar = () => {
    const [slide, setSlide] = useState(16);

    return (
        <div className="flex flex-col justify-around items-center h-[100%] text-[#2C2C2C] font-inter">
            <div className="flex justify-between items-center w-[100%] px-8 pt-2">
                <div className="w-[12px] hover:scale-[110%]">
                    <img src={backArrow} alt="Back Arrow" />
                </div>
                <div className="flex-col items-center h-[100%]">
                    <h1 className="relative text-xl sm:text-[1.5rem] font-semibold bottom-[-2px]">
                        Leaderboard
                    </h1>
                </div>
                <div className="w-[20px] hover:rotate-[180deg] transition-all duration-500">
                    <img src={fourDots} alt="Four Dots" />
                </div>
            </div>
            <div className="bg-white px-2 py-4 relative top-[-5px] flex w-[80%] sm:w-[400px] rounded-2xl justify-around mt-2 text-sm lg:text-md font-semibold">
                <div
                    className="text-center cursor-pointer relative z-10"
                    onClick={() => setSlide(16)}
                >
                    Organisation
                </div>
                <div
                    className="text-center cursor-pointer relative z-10"
                    onClick={() => setSlide(63.5)}
                >
                    Department
                </div>
                <div
                    className="absolute bottom-[5px] h-[5%] bg-[#3B5987] transition-all duration-[400ms] ease-in-out w-[22%] z-0"
                    style={{ left: `${slide}%` }}
                />
            </div>
        </div>
    );
};

export default Navbar;
