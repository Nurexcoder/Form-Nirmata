import { useState } from "react";
import { Switch } from "@headlessui/react";

const SwitchComponet = ({ value, handleToggleRequired, index, isRequired }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none"
        checked={isRequired}
        onChange={() => {
        handleToggleRequired(index);
        // setEnabled(!enabled);
      }}
      />
      {/* <span className="text-gray-700">Toggle switch</span> */}
    </label>
    // </Switch>
  );
};
export default SwitchComponet;
