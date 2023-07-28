import { useEffect, useState } from "react";

const useCaretPosition = (contentRef) => {
  const [caretPosition, setCaretPosition] = useState({ start: 0, end: 0 });

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        setCaretPosition({
          start: range.startOffset,
          end: range.endOffset,
        });
      }
    };
    if (contentRef.current)
      contentRef.current.addEventListener("input", handleSelectionChange);
    return () => {
      contentRef.current.removeEventListener("input", handleSelectionChange);
    };
  }, [contentRef]);

  return caretPosition;
};

export default useCaretPosition;
