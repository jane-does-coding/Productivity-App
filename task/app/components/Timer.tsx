"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SettingsContext from "../contexts/SettingsContext";
import SettingsButton from "./SettingsButton";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work"
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;

  return (
    <>
      <SettingsButton className="absolute top-[1rem] left-[1rem] md:left-[2rem] select-none transition-[1s] bg-neutral-900/[60%] hover:bg-neutral-900/[80%] backdrop-blur-md p-4 rounded-full cursor-pointer flex items-center justify-center" />
      <div className="w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] 2xl:w-[30vw]">
        <CircularProgressbarWithChildren
          className="bg-neutral-900/[40%] backdrop-blur-[10px] p-4 rounded-full relative"
          value={percentage}
          strokeWidth={5}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: "rgb(225, 225, 225)",
            trailColor: "rgb(0, 0, 0, 0.5)",
          })}
        >
          <span className="absolute top-[20%] w-full text-center text-[1.3rem] select-none">
            {mode === "work" ? "Work" : "Break"}
          </span>
          <h1 className="text-[4rem] md:text-[4rem] xl:text-[5rem] font-bold text-white/[90%] select-none">
            {minutes}:{seconds < 10 ? "0" : null}
            {seconds}
          </h1>
          {isPaused ? (
            <PlayButton
              onClick={() => {
                setIsPaused(false);
                isPausedRef.current = false;
              }}
              className="select-none transition-[1s] bg-neutral-900/[60%] hover:bg-neutral-900/[80%] backdrop-blur-md py-3 px-6 rounded-full overflow-hidden cursor-pointer flex items-center justify-center gap-3"
            />
          ) : (
            <PauseButton
              onClick={() => {
                setIsPaused(true);
                isPausedRef.current = true;
              }}
              className="select-none transition-[1s] bg-neutral-900/[60%] hover:bg-neutral-900/[80%] backdrop-blur-md py-3 px-6 rounded-full overflow-hidden cursor-pointer flex items-center justify-center gap-3"
            />
          )}
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
};

export default Timer;
