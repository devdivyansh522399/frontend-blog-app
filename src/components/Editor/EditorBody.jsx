import React from 'react'
import Editor from './Editor';

const EditorBody = ({desc, setDesc}) => {
    const getValue = (desc) => {
      setDesc(desc);
    };
    return (
      <div className="my-4">
        <Editor initialValue="" getValue={getValue} editable={true}/>
      </div>
    );
}

export default EditorBody