import React, { useState } from "react";
import { BiSpreadsheet } from "react-icons/bi";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../quill-custom.css";
import CustomTextEditor from "../components/formbuilder/CustomEditor";
import InputSelector from "../components/formbuilder/InputSelector";

const Formbuilder = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [activeDiv, setActiveDiv] = useState(-1);
  const [formSchema, setFormSchema] = useState({
    name: { value: "Untitled", placeholder: "" },
    description: { value: "Description", placeholder: "" },
    contents: [
      {
        name: "Question",
        type: "text",
        placeholder: "",
        options: [
          {
            value: "",
            label: "",
          },
        ],

        isDeletable: false,
      },
     
    ],
  });
  const handleNameTitleChange = (innerHtlml, type) => {
    setFormSchema({ ...formSchema, [type]: { value: innerHtlml } });
  };
  const handleTypeChange = (value, index) => {
    console.log(value);
    setFormSchema((prevFormSchema) => {
      const updatedContent = [...prevFormSchema.contents];
      updatedContent[index] = { ...updatedContent[index], type: value };
      return { ...prevFormSchema, contents: updatedContent };
    });
  };
  const handleAddContentAtIndex = (index, newContent) => {
    const updatedContent = [...formSchema.contents];
    updatedContent.splice(index, 0, newContent);
    setFormSchema({
      ...formSchema,
      contents: updatedContent,
    });
    // setActiveDiv((prevActiveDiv) => prevActiveDiv + 2);
  };
  const handleRemoveField = (index) => {
    const updatedContent = [...formSchema.contents];
    updatedContent.splice(index, 1);
    setFormSchema({ ...formSchema, contents: updatedContent });
  };
  const handleContentNameChange = (index, newName) => {
    const updatedContent = [...formSchema.contents];
    updatedContent[index].name = newName;

    setFormSchema({
      ...formSchema,
      contents: updatedContent,
    });
  };
  const handleAddNewOption = (contentIndex) => {
    const updatedContent = [...formSchema.contents];
    console.log(contentIndex);

    const updatedOptions = [...formSchema.contents[contentIndex].options];

    updatedOptions.push({
      value: "Option " + updatedOptions.length,
      label: "Option " + updatedOptions.length,
    });

    updatedContent[contentIndex].options = updatedOptions;

    setFormSchema({
      ...formSchema,
      contents: updatedContent,
    });
  };
  const handleOptionChange = (
    contentIndex,
    optionIndex,
    newValue,
    newLabel
  ) => {
    const updatedContent = [...formSchema.contents];
    const updatedOptions = [...formSchema.contents[contentIndex].options];

    updatedOptions[optionIndex].value = newValue;
    updatedOptions[optionIndex].label = newLabel;

    updatedContent[contentIndex].options = updatedOptions;

    setFormSchema({
      ...formSchema,
      contents: updatedContent,
    });
  };
  console.log(formSchema, activeDiv);

  const handleSchemaSubmit = async () => {
    // e.preventDefault();
    const res = await fetch("http://localhost:5000/api/formbuilder", {
      method: "POST",
      body: JSON.stringify(formSchema),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="h-[100vh] overflow-y-hidden w-full bg-slate-300 flex   flex-col">
      <div className="flex justify-between items-center p-4 bg-white shadow-2xl h-[68px]">
        <div className="flex items-center gap-1">
          <BiSpreadsheet color="#1a8cd8" fontSize={"2rem"} />
          <h1 className="text-2xl font-bold text-gray-800 m-0">Formbuilder</h1>
        </div>
        <div className=" flex items-center gap-2">
          <button
            type="button"
            className="bg-blue-900 px-5 py-1.5 rounded-full text-white hover:bg-blue-600 flex items-center"
            onClick={handleSchemaSubmit}
          >
            Save
          </button>
          <button
            type="button"
            className="bg-green-600 px-5 py-1.5 rounded-full text-white hover:bg-green-400"
          >
            Preview
          </button>
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-68px)]">
        <div className="w-[80%]  max-w-2xl mt-2 mx-auto bg-white p-8 rounded-md flex flex-col items-center justify-center gap-2">
          <CustomTextEditor
            name={formSchema.name}
            handleNameTitleChange={handleNameTitleChange}
            variant={"main"}
          />
          <CustomTextEditor
            description={formSchema.description}
            multiline={true}
            handleNameTitleChange={handleNameTitleChange}
          />
        </div>
        <div className="w-[80%]  max-w-2xl  mx-auto my-3  flex flex-col gap-4">
          {formSchema.contents.map((item, index) => {
            return (
              <InputSelector
                key={index}
                index={index}
                type={item?.type}
                handleTypeChange={handleTypeChange}
                options={item?.options}
                active={index === activeDiv}
                activeDiv={activeDiv}
                setActiveDiv={setActiveDiv}
                handleRemoveField={handleRemoveField}
                handleAddContentAtIndex={handleAddContentAtIndex}
                currentSchema={item}
                handleContentNameChange={handleContentNameChange}
                handleAddNewOption={handleAddNewOption}
                handleOptionChange={handleOptionChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Formbuilder;
