import React, { useEffect, useState } from "react";
import { BiSpreadsheet } from "react-icons/bi";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../quill-custom.css";
import CustomTextEditor from "../components/formviewer/CustomEditor";
import InputSelector from "../components/formviewer/InputSelector";
import { useParams } from "react-router-dom";
const Formviewer = () => {
  const [activeDiv, setActiveDiv] = useState(-1);
  const [formSchema, setFormSchema] = useState({
    name: { value: "Untitled", placeholder: "" },
    description: { value: "Description", placeholder: "" },
    contents: [
      {
        name: "Questi",
        type: "text",
        placeholder: "",
        options: [
          {
            value: "",
            label: "",
          },
        ],

        isDeletable: false,
        answer: "",
      },
    ],
  });
  const { id } = useParams();
  const handleGetSchema = async () => {
    // e.preventDefault();
    const res = await fetch(
      "http://localhost:5000/api/formbuilder/"+id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setFormSchema(data);
  };

  useEffect(() => {
    handleGetSchema();
  }, []);

  const handleAnswerChange = (index, newAnswer) => {
    setFormSchema((prevSchema) => {
      const updatedContents = [...prevSchema.contents];
      updatedContents[index] = { ...updatedContents[index], answer: newAnswer };
      return { ...prevSchema, contents: updatedContents };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formSchema.name,
      description: formSchema.description,
      contents: formSchema.contents.map((item) => {
        return {
          name: item.name,
          type: item.type,
          answer: item.answer,
        };
      }),
    };
    console.log(data);
    const res = await fetch(
      "http://localhost:5000/api/response/" + formSchema._id,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className="h-[100vh] overflow-y-hidden w-full bg-slate-300 flex   flex-col">
      <div className="flex justify-between items-center p-4 bg-white shadow-2xl h-[68px]">
        <div className="flex items-center gap-1">
          <BiSpreadsheet color="#1a8cd8" fontSize={"2rem"} />
          <h1 className="text-2xl font-bold text-gray-800 m-0">Formviewer</h1>
        </div>
      </div>
      <form
        className="overflow-y-auto h-[calc(100vh-68px)]"
        onSubmit={handleFormSubmit}
      >
        <div className="w-[80%]  max-w-2xl mt-2 mx-auto bg-white p-8 rounded-md flex flex-col items-center justify-center gap-2">
          <CustomTextEditor name={formSchema.name} variant={"main"} />
          <CustomTextEditor name={formSchema.description} multiline={true} />
        </div>
        <div className="w-[80%]  max-w-2xl  mx-auto my-3  flex flex-col gap-4">
          {formSchema?.contents?.map((item, index) => {
            return (
              <InputSelector
                key={index}
                index={index}
                type={item?.type}
                options={item?.options}
                active={index === activeDiv}
                activeDiv={activeDiv}
                setActiveDiv={setActiveDiv}
                currentSchema={item}
                answer={item?.answer}
                handleAnswerChange={handleAnswerChange}
              />
            );
          })}
          <div className="">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formviewer;