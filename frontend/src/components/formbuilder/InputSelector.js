import React, { useEffect, useRef } from "react";
import Text from "./inputTypes/Text";
import SelectBox from "./SelectBox";
import Selector from "./Selector";
import CustomTextEditor from "./CustomEditor";
import Switch from "../customInputs/Switch";
import { RiDeleteBinLine } from "react-icons/ri";
import VerticalDivider from "../customInputs/VerticalDivider";
import { AiOutlinePlusCircle } from "react-icons/ai";

const InputSelector = ({
  type,
  handleTypeChange,
  index,
  options,
  active,
  setActiveDiv,
  handleRemoveField,
  currentSchema,
  handleAddContentAtIndex,
  handleContentNameChange,
  handleAddNewOption,
  handleOptionChange,
  activeDiv,
  handleToggleRequired,
  isRequired
  
}) => {
  const divRef = useRef(null);

  useEffect(() => {
    if (activeDiv !== -1 && divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
      divRef.current.focus();
    }
  }, [divRef]);

  // console.log(type);
  return (
    <div
      onClick={() => setActiveDiv(index)}
      className="w-full bg-white p-8 rounded-md grid gap-y-3 group/inputselector"
    >
      <div>
        <div className="w-full flex gap-x-10 ">
          <CustomTextEditor
            variant={"secondary"}
            handleContentNameChange={handleContentNameChange}
            index={index}
            divRef={divRef}
            currentValue={currentSchema.name}
            key={index}
          />
          <SelectBox
            handleTypeChange={handleTypeChange}
            active={active}
            index={index}
          />
        </div>
        <Selector
          type={type}
          options={options}
          handleAddNewOption={handleAddNewOption}
          index={index}
          active={active}
          handleOptionChange={handleOptionChange}
        />
      </div>
      <hr
        className={` ${
          active ? "flex h-max" : "hidden"
        } my-2 w-full border-blue-900`}
      />
      <div
        className={` h-0 gap-x-2 duration-200 ease-in-out group-focus-within/inputselector:flex ${
          active ? "flex h-max" : "hidden"
        }  group-focus-within/inputselector:h-max transition `}
      >
        <div className="flex gap-x-2 items-center">
          <Switch
            handleToggleRequired={handleToggleRequired}
            isRequired={isRequired}
            index={index}
            value={"Required"}
          />
          <span className="text-xl font-normal">Required</span>
        </div>
        {index ? (
          <>
            <VerticalDivider />
            <button
              onClick={() => handleRemoveField(index)}
              className="text-red-500 hover:text-red-700 p-1 focus:outline-none"
            >
              <RiDeleteBinLine size={24} />
            </button>
          </>
        ) : (
          ""
        )}
        <VerticalDivider />
        <button
          className="bg-blue-500 hover:bg-blue-600 px-2 text-white font-bold  rounded focus:outline-none"
          onClick={() => handleAddContentAtIndex(index, currentSchema)}
        >
          <AiOutlinePlusCircle size={24} className="inline-block mr-2" />
          Add Question
        </button>
      </div>
    </div>
  );
};

export default InputSelector;
