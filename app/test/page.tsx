"use client"
import * as test from "../../data/test.json" //TODO: this should come from an api

import Editor, { Monaco, DiffEditor } from "@monaco-editor/react"
import { type editor } from 'monaco-editor';
import { useRef, useState } from "react"

export default function Page() {
  console.log(test.lessonName[0])
  const [currentInput, setCurrentInput] = useState("")
  const [checkedInput, setCheckedInput] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(false)

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

  const handleCheckedInput = () => {
    setCheckedInput(true)
    setCurrentInput(editorRef.current.getValue())
  }

  const handleTabChange = (newText: string, readOnly: boolean) => {
    setCheckedInput(false)
    setCurrentInput(newText)
    setIsReadOnly(readOnly)
  }

  console.log(isReadOnly)
  return (
    <div>
      <div className="flex mx-3 my-2">
        {
          test.lessonName.map((value, index) => {
            console.log(value.correctValue, value.correctValue ?? false)
            return (
              <div className="flex mr-8">
                <label for={`tab-${index}`}>{value.tabName}</label>
                <input
                  type="radio"
                  name="tabs" id={`tab-${index}`}
                  onClick={() => handleTabChange(value.defaultValue,
                    value.correctValue !== undefined ? false : true)}
                />
              </div>
            )
          })}
      </div>
      <Editor
        value={currentInput}
        height="80vh"
        width="100vw"
        language="sol"
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        options={{ minimap: { enabled: false }, readOnly: isReadOnly }}
      />
      <DiffEditor
        original={currentInput !== "" && checkedInput ? currentInput : ""}
        modified={currentInput !== "" && checkedInput ? goal : ""}
        height="15vh"
        width="100%"
        language="sol"
        options={{ renderSideBySide: false, minimap: { enabled: false } }}
      />
      <button onClick={handleCheckedInput}>Click me</button>
    </div>
  )
}