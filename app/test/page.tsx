"use client"
import * as test from "../../data/test.json" //TODO: this should come from an api

import Editor, { Monaco, DiffEditor } from "@monaco-editor/react"
import { type editor } from 'monaco-editor';
import { useRef, useState } from "react"

export default function Page() {
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
    if (isReadOnly !== true) {
      setCheckedInput(true)
      setCurrentInput(editorRef?.current.getValue())
    }
  }

  const handleTabChange = (newText: string, readOnly: boolean) => {
    setCheckedInput(false)
    setCurrentInput(newText)
    setIsReadOnly(readOnly)
  }
  console.log("RENDERED")
  return (
    <div>
      <div className="flex mx-3 my-2">
        {
          test.lessonName.tabs.map((value, index) => {
            console.log(test.lessonName.defaultTab === index, index)
            return (
              <div className="flex mr-8" key={`editor-tab-${index}`}>
                <label htmlFor={`editor-tab-${index}`}>{value.tabName}
                  <input
                    type="radio"
                    name="tabs"
                    id={`editor-tab-${index}`}
                    key={`editor-tab-${index}`}
                    defaultChecked={test.lessonName.defaultTab === index}
                    onClick={() => handleTabChange(value.defaultValue,
                      value.correctValue !== undefined ? false : true)}
                  />
                </label>
              </div>
            )
          })}
      </div>
      <Editor
        defaultValue={test.lessonName.tabs[test.lessonName.defaultTab].defaultValue}
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
        height="12vh"
        width="100%"
        language="sol"
        options={{ renderSideBySide: false, minimap: { enabled: false } }}
      />
      <button onClick={handleCheckedInput}>Click me</button>
    </div>
  )
}