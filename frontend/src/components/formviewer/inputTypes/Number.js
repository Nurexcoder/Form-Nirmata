import React from "react";
import CustomTextEditor from "../CustomEditor";

const Number = ({ answer, handleAnswerChange, index,isRequired }) => {
  return (
    <input
      type="number"
      value={answer}
      onChange={(e) => handleAnswerChange(index, e.target.value)}
      placeholder="Eg:1"
      required={isRequired}

      className="w-[80%] p-2 border-t-0 border-x-0 border-b border-black/30 "
    />
  );
};

export default Number;
