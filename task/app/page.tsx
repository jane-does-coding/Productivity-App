"use client";
import { useState } from "react";
import Settings from "./components/Settings";
import SettingsButton from "./components/SettingsButton";
import Timer from "./components/Timer";
import SettingsContext from "./contexts/SettingsContext";

export default function Home() {
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <SettingsContext.Provider
      value={{
        workMinutes: workMinutes,
        breakMinutes: breakMinutes,
        setWorkMinutes: setWorkMinutes,
        setBreakMinutes: setBreakMinutes,
      }}
    >
      <main className="fixed text-white bg-black/[15%] h-screen w-full overflow-hidden flex items-center justify-center">
        <video
          className="w-full h-screen fixed top-0 left-0 z-[-1] object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/ocean2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showSettings ? <Settings /> : <Timer />}
      </main>
    </SettingsContext.Provider>
  );
}
