import React from 'react'
import Editor from './Editor';

const EditorBody = ({desc, setDesc, initialValue=""}) => {
    const getValue = (desc) => {
      setDesc(desc);
    };
    return (
      <div className="my-4">
        <Editor initialValue={initialValue} getValue={getValue} editable={true}/>
      </div>
    );
}

export default EditorBody