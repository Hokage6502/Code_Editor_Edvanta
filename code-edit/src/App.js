import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import './App.css';

function App() {
  const code = "console.log('Code Mirror!');"
  return (
    <>
      <div className="header">
        <h3> Basic Code Editor</h3>
      </div>
      <div className="editor">
        <CodeMirror
          value={code}
          height="80%"
          minHeight="200px"
          theme={vscodeDark}
        />
      </div>
    </>
  );
}

export default App;
