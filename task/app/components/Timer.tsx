"use client";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";

const Timer = () => {
  return (
    <div className="w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] 2xl:w-[30vw]">
      <CircularProgressbarWithChildren
        className="bg-neutral-900/[30%] backdrop-blur-md p-4 rounded-full relative"
        value={50}
        strokeWidth={5}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "rgb(225, 225, 225)",
          trailColor: "rgb(0, 0, 0, 0.4)",
        })}
      >
        <span className="absolute top-[20%] w-full text-center text-[1.3rem]">
          Work
        </span>
        <h1 className="text-[4rem] md:text-[4rem] xl:text-[5rem]">16:34</h1>
        <PlayButton />
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Timer;
