import React from "react";
import CustomTextEditor from "../CustomEditor";

const Text = ({ answer, handleAnswerChange,index }) => {
  return (
    <input
      placeholder="eg : some text"
      value={answer}
      onChange={(e) => handleAnswerChange(index, e.target.value)}
      className="w-[80%] p-2 border-b"
    />
  );
};

export default Text;
