import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const CustomTextViewer = ({
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
}) => {
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderline, setUnderline] = useState(false);
  const [fontColor, setFontColor] = useState("#000000");
  const [content, setContent] = useState("");

  console.log(name)
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
          dangerouslySetInnerHTML={{
            __html: name ,
          }}
        />
      ) : (
        <div
          ref={divRef}
          className={`editor ${
            variant === "main"
              ? "text-4xl font-medium"
              : variant === "secondary"
              ? "text-2xl"
              : ""
          }`}
          // contentEditable="true"
          dangerouslySetInnerHTML={{
            __html: name ,
          }}
        />
      )}
    </div>
  );
};

export default CustomTextViewer;
