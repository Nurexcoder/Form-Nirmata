import React from "react";
import Select from "react-select";

const options = [
  { value: "text", label: "Text" },
  { value: "textarea", label: "Text Area" },
  { value: "number", label: "Number" },
  { value: "date", label: "Date" },
  { value: "time", label: "Time" },
  { value: "multiple", label: "Multiple" },
];

const SelectBox = ({ handleTypeChange, index, active }) => {
  return (
    <div
      className={`w-[40%]   group-focus-within/inputselector:block transition ${
        active ? "block" : "hidden"
      }`}
    >
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            padding: "3px",
          }),
        }}
        defaultValue={options[0]}
        className=""
        options={options}
        isSearchable={false}
        onChange={(data) => handleTypeChange(data.value, index)}
      />
    </div>
  );
};

export default SelectBox;
