import { useContext } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import SettingsContext from "../contexts/SettingsContext";

const SettingsButton = (props: any) => {
  const settingsInfo = useContext(SettingsContext);

  return (
    <button
      {...props}
      onClick={() => settingsInfo.setShowSettings(!settingsInfo.showSettings)}
    >
      <IoSettingsOutline size={34} />
    </button>
  );
};

export default SettingsButton;
