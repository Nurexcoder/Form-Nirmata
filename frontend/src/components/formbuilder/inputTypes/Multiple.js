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
}) => {
  return (
    <div>
      {options?.map((option, i) => (
        <div key={i} className="flex justify-center space-x-2 cursor-pointer">
          {/* <label > */}
          <input
            type="radio"
            value={option?.value}
            disabled
            // checked={checked}
            // onChange={onChange}
            className="appearance-none w-4 h-4 mt-[10px] border border-gray-300 rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none"
          />
          <CustomTextEditor
            handleOptionChange={handleOptionChange}
            optionIndex={i}
            index={schemaIndex}
            currentValue={option?.value}
          />
          {i ? (
            <button
              // onClick={onClick}
              className={` ${
                active ? "flex" : "hidden"
              } text-red-500 hover:text-red-700 p-1 focus:outline-none`}
            >
              <RiDeleteBinLine size={24} />
            </button>
          ) : (
            ""
          )}
          {/* </label> */}
        </div>
      ))}
      <button
        onClick={() => handleAddNewOption(schemaIndex)}
        className={`${
          active ? "flex" : "hidden"
        } group-focus-within/inputselector:flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline  items-center  gap-x-1`}
      >
        <AiOutlinePlus /> Add
      </button>
    </div>
  );
};

export default Multiple;
