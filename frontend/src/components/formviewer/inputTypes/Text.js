import React from "react";
import CustomTextEditor from "../CustomEditor";

const Text = ({ answer, handleAnswerChange,index,isRequired }) => {
  console.log(isRequired)
  return (
    <input
      placeholder="eg : some text"
      value={answer}
      onChange={(e) => handleAnswerChange(index, e.target.value)}
      className="w-[80%] p-2 border-b"
      required={isRequired}
    />
  );
};

export default Text;
