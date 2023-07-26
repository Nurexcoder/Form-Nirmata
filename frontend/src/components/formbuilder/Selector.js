import React from "react";
import Text from "./inputTypes/Text";
import Number from "./inputTypes/Number";
import TextArea from "./inputTypes/TextArea";
import DatePickerComponent from "./inputTypes/DatePicker";
import Time from "./inputTypes/Time";
import Multiple from "./inputTypes/Multiple";

const Selector = ({
  type,
  options,
  handleAddNewOption,
  index,
  active,
  handleOptionChange,
  ref
}) => {
  console.log(type);
  switch (type) {
    case "text":
      return <Text key={type}  />;
    case "number":
      return <Number key={type} />;
    case "textarea":
      return <TextArea key={type} />;
    case "date":
      return <DatePickerComponent key={type} />;
    case "time":
      return <Time key={type} />;
    case "multiple":
      return (
        <Multiple
          key={type}
          options={options}
          handleAddNewOption={handleAddNewOption}
          schemaIndex={index}
          active={active}
          handleOptionChange={handleOptionChange}
        />
      );
    default:
      break;
  }
};

export default Selector;
