import React, { useMemo, useRef } from "react";
import JoditEditor from "jodit-react";

const Editor = ({ initialValue, getValue, editable }) => {
  const editor = useRef(null);
  const config = useMemo(() => {
      return {
        readonly : !editable,
        toolbar : editable,
        uploader: { insertImageAsBase64URI: true },
        removeButtons: ["brush", "file"],
        showXPathInStatusbar: false,
        showCharsCounter: false,
        showWordsCounter: false,
        toolbarAdaptive: true,
        toolbarSticky: true,
    }
  }, [editable])
  const handleDataChange = (newContent) => {
    getValue(newContent);
};

  return (
    <JoditEditor
      editor={editable && editor}
      value={initialValue}
      config={config}
      tabIndex={1}
      onBlur={handleDataChange}
    />
  );
};

export default Editor;
