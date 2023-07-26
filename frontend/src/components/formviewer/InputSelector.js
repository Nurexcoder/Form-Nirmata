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
}) => {
  const divRef = useRef(null);
  console.log(currentSchema)
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
      className="w-full bg-white p-8 rounded-md grid group/inputselector"
    >
      <div className="grid gap-y-2">
        <div className="w-full flex gap-x-10 ">
          <CustomTextEditor
            variant={"secondary"}
            handleContentNameChange={handleContentNameChange}
            index={index}
            divRef={divRef}
            name={currentSchema.name}
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
      
    </div>
  );
};

export default InputSelector;
