import React from "react";
import CustomTextEditor from "../CustomEditor";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

const Multiple = ({
  options,
  handleAddNewOption,
  schemaIndex,
  active,
  handleOptionChange,
  answer,
  handleAnswerChange,
}) => {
  return (
    <fieldset>
      {options?.map((option, i) => (
        <div
          onClick={() => handleAnswerChange(schemaIndex, option?.value)}
          key={i}
          className="flex justify-center space-x-2 cursor-pointer"
        >
          {/* <label > */}
          <input
            type="radio"
            value={option?.value}
            checked={option?.value === answer}
            className="appearance-none w-4 h-4 mt-[10px] border border-gray-300 rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none"
          />
          <CustomTextEditor
            handleOptionChange={handleOptionChange}
            name={option?.value}
            optionIndex={i}
            index={schemaIndex}
          />
        </div>
      ))}
    </fieldset>
  );
};

export default Multiple;
