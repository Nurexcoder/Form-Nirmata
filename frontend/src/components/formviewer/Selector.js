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
  ref,
  handleAnswerChange,
  answer,
}) => {
  switch (type) {
    case "text":
      return (
        <Text
          key={type}
          handleAnswerChange={handleAnswerChange}
          answer={answer}
          index={index}
        />
      );
    case "number":
      return (
        <Number
          key={type}
          handleAnswerChange={handleAnswerChange}
          answer={answer}
          index={index}
        />
      );
    case "textarea":
      return (
        <TextArea
          key={type}
          handleAnswerChange={handleAnswerChange}
          answer={answer}
          index={index}
        />
      );
    case "date":
      return (
        <DatePickerComponent
          key={type}
          handleAnswerChange={handleAnswerChange}
          answer={answer}
          index={index}
        />
      );
    case "time":
      return (
        <Time
          key={type}
          handleAnswerChange={handleAnswerChange}
          answer={answer}
          index={index}
        />
      );
    case "multiple":
      return (
        <Multiple
          key={type}
          options={options}
          handleAddNewOption={handleAddNewOption}
          schemaIndex={index}
          active={active}
          handleOptionChange={handleOptionChange}
          handleAnswerChange={handleAnswerChange}
          answer={answer}
        />
      );
    default:
      break;
  }
};

export default Selector;
