import { useContext } from "react";
import SettingsContext from "../contexts/SettingsContext";

const SetSettingsButton = (props: any) => {
  const settingsInfo = useContext(SettingsContext);

  return (
    <button
      {...props}
      onClick={() => settingsInfo.setShowSettings(!settingsInfo.showSettings)}
    >
      Done
    </button>
  );
};

export default SetSettingsButton;
