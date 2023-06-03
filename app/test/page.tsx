"use client"
import * as test from "../../data/test.json"

import Editor, { Monaco, DiffEditor } from "@monaco-editor/react"
import { type editor } from 'monaco-editor';
import { useRef, useState } from "react"

export default function Page() {
  console.log(test.lessonName[0])
  const [currentInput, setCurrentInput] = useState("")
  const goal = "pragma solidity ^0.8.0;"
  const monacoRef = useRef<Monaco | null>(null);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  function handleEditorWillMount(monaco: Monaco) {
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function handleEditorDidMount(editor: editor.IStandaloneCodeEditor, monaco: Monaco) {
    editorRef.current = editor;
    monacoRef.current = monaco;
  }

  return (
    <div>
      <div className="flex mx-3 my-2">
        {
          test.lessonName.map((value, index) => {
            return (
              <div className="flex mr-8">
                <label for={`tab-${index}`}>{value.tabName}</label>
                <input type="radio" name="tabs" id={`tab-${index}`}/>
              </div>
            )
          })}
      </div>
      <Editor
        defaultValue="blahblah"
        height="80vh"
        width="100vw"
        language="sol"
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        options={{ minimap: { enabled: false } }}
      />
      <DiffEditor
        original={currentInput !== "" ? currentInput : ""}
        modified={currentInput !== "" ? goal : ""}
        height="15vh"
        width="100%"
        language="sol"
        // beforeMount={handleEditorWillMount}
        // onMount={handleEditorDidMount}
        options={{ renderSideBySide: false, minimap: { enabled: false } }}
      />
      <button onClick={() => { setCurrentInput(editorRef.current.getValue()) }}>Click me</button>
    </div>
  )
}