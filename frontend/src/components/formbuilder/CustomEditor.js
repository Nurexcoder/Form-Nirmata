import React, { useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useCaretPosition from "../customInputs/useCaretPath";
const CustomTextEditor = ({
  variant,
  multiline,
  handleNameTitleChange,
  description,
  name,
  handleContentNameChange,
  index,
  handleOptionChange,
  optionIndex,
  divRef,
  currentValue,
}) => {
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderline, setUnderline] = useState(false);
  const [fontColor, setFontColor] = useState("#000000");
  const [content, setContent] = useState("");
  const contentRef = useRef(null);

  useEffect(() => {
    if(contentRef.current){
      console.log(currentValue)
      contentRef.current.innerHTML=currentValue
       }
    
  }, [])
  
  // const caretPosition = useCaretPosition(contentRef);
  const handleBold = () => {
    setBold(!isBold);
    document.execCommand("bold", false, null);
  };

  const handleItalic = () => {
    setItalic(!isItalic);
    document.execCommand("italic", false, null);
  };

  const handleUnderline = () => {
    setUnderline(!isUnderline);
    document.execCommand("underline", false, null);
  };

  const handleFontColorChange = (event) => {
    const color = event.target.value;
    setFontColor(color);
    document.execCommand("foreColor", false, color);
  };

  const handleEditorChange = (event) => {
    
    setContent(event.target.innerHTML);
    // if (contentRef.current) {
    //   contentRef.current.focus();
    // }

    if (name) {
      handleNameTitleChange(event.target.innerHTML, "name");
    } else if (description) {
      handleNameTitleChange(event.target.innerHTML, "description");
    } else if (index !== undefined) {
      if (optionIndex !== undefined) {
        handleOptionChange(
          index,
          optionIndex,
          event.target.innerHTML,
          event.target.innerHTML
        );
      } else {
        handleContentNameChange(index, event.target.innerHTML);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };
  return (
    <div ref={divRef} className="custom-text-editor flex-3  group/editor">
      {multiline ? (
        <div
          className={`editor ${
            variant === "main"
              ? "text-4xl font-medium"
              : variant === "secondary"
              ? "text-2xl"
              : ""
          }`}
          // contentEditable="true"
          contentEditable={true}
          style={{ color: fontColor }}
          onInput={handleEditorChange}
         
          ref={contentRef}
        />
      ) : (
        <div
          ref={contentRef}
          className={`editor ${
            variant === "main"
              ? "text-4xl font-medium"
              : variant === "secondary"
              ? "text-2xl"
              : ""
          }`}
          id=""
          key={name}
          onKeyDown={handleKeyDown}
          // contentEditable="true"
          contentEditable={true}
          style={{ color: fontColor }}
          onInput={handleEditorChange}
          // dangerouslySetInnerHTML={{
          //   __html: content || name || description || currentValue,
          // }}
        />
      )}
      <div className="toolbar h-0 w-0 scale-0  group-focus-within/editor:h-auto group-focus-within/editor:w-auto group-focus-within/editor:scale-100 ">
        <button
          className={isBold ? "active" : "" + "font-bold"}
          onClick={handleBold}
        >
          B
        </button>
        <button
          className={`${isItalic ? "active" : ""} italic`}
          onClick={handleItalic}
        >
          I
        </button>
        <button
          className={`underline ${isUnderline ? "active" : ""}`}
          onClick={handleUnderline}
        >
          U
        </button>
      </div>
    </div>
  );
};

export default CustomTextEditor;
