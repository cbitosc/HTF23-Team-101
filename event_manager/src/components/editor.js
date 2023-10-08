import React from "react";
import "./styles/Editor.css";

const Editor = ({isReadOnly, placeholder, text}) => {
    return (
        <textarea className="editor" id="editor" name="editor" row="5" cols="5"
        placeholder={placeholder}
        readOnly={isReadOnly}
        >
            {text}
        </textarea>
    )
}

export default Editor;