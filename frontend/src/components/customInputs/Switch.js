import { useState } from "react";
import { Switch } from "@headlessui/react";

const SwitchComponet = ({ value, handleToggleRequired, index,checked }) => {
  const [enabled, setEnabled] = useState(false);
  console.log(checked)
  return (
    <Switch
      checked={enabled}
      onChange={() => {
        handleToggleRequired(index);
        setEnabled(!enabled);
      }}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-400"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">{value}</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};
export default SwitchComponet;