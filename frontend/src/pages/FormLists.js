import React from "react";
import { BiSpreadsheet } from "react-icons/bi";

const FormLists = () => {
  return (
    <div className="w-full h-[100vh] overflow-hidden ">
      <div className="flex justify-between items-center p-4 bg-white shadow-md h-[68px]">
        <div className="flex items-center gap-1">
          <BiSpreadsheet color="#1a8cd8" fontSize={"2rem"} />
          <h1 className="text-2xl font-bold text-gray-800 m-0">Formviewer</h1>
        </div>
        <button
          type="button"
          className="bg-green-600 px-5 py-1.5 rounded-full text-white hover:bg-green-400"
        >
          Create New Form
        </button>
      </div>
    </div>
  );
};

export default FormLists;
