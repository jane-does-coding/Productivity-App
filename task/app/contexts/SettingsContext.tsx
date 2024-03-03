import React from "react";

const SettingsContext = React.createContext({
  workMinutes: 45 as number,
  breakMinutes: 15 as number,
  setWorkMinutes: null as any,
  setBreakMinutes: null as any,
});

export default SettingsContext;
