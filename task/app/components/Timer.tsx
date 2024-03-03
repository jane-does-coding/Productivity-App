"use client";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";

const Timer = () => {
  return (
    <>
      <SettingsButton className="absolute top-[1rem] left-[1rem] md:left-[2rem] select-none transition-[1s] bg-neutral-900/[60%] hover:bg-neutral-900/[80%] backdrop-blur-md p-4 rounded-full cursor-pointer flex items-center justify-center" />
      <div className="w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] 2xl:w-[30vw]">
        <CircularProgressbarWithChildren
          className="bg-neutral-900/[40%] backdrop-blur-[10px] p-4 rounded-full relative"
          value={30}
          strokeWidth={5}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: "rgb(225, 225, 225)",
            trailColor: "rgb(0, 0, 0, 0.5)",
          })}
        >
          <span className="absolute top-[20%] w-full text-center text-[1.3rem] select-none">
            Work
          </span>
          <h1 className="text-[4rem] md:text-[4rem] xl:text-[5rem] font-bold text-white/[90%] select-none">
            18:34
          </h1>
          {/*           <PauseButton className="select-none transition-[1s] bg-neutral-900/[60%] hover:bg-neutral-900/[80%] backdrop-blur-md py-3 px-6 rounded-full overflow-hidden cursor-pointer flex items-center justify-center gap-3" />
           */}{" "}
          <PlayButton className="select-none transition-[1s] bg-neutral-900/[60%] hover:bg-neutral-900/[80%] backdrop-blur-md py-3 px-6 rounded-full overflow-hidden cursor-pointer flex items-center justify-center gap-3" />
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
};

export default Timer;
