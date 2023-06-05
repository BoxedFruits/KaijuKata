//break this out into another component
//page should handle the api call to get the data of the right half if needed, its state
"use client"
import * as test from "../../data/test.json" //TODO: this should come from an api

import Editor, { Monaco, DiffEditor } from "@monaco-editor/react"
import { type editor } from 'monaco-editor';
import { useEffect, useId, useRef, useState } from "react"


//TODO: this should be use an api call to get the data that is passed into it from page.tsx
const EditorPanel = () => {
    const [currentInput, setCurrentInput] = useState("")
    const [checkedInput, setCheckedInput] = useState(false)
    const [correctValue, setCorrectValue] = useState("")
    const [currentTab, setCurrentTab] = useState(test.lessonName.defaultTab)
    const [isReadOnly, setIsReadOnly] = useState(false)
    const toBeSelectedId = useId(); //NOTE: this is only being used as there is a big with nextjs and the checked attribute. https://github.com/vercel/next.js/issues/49499
  
    const monacoRef = useRef<Monaco | null>(null);
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  
    useEffect(() => {
      //@ts-ignore
      document.querySelector(`[data-id="${toBeSelectedId}"]`).checked = true;
    }, [toBeSelectedId])
  
  
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
        setCurrentInput(editorRef!.current!.getValue())
      }
    }
  
    const handleTabChange = (newText: string, correctValue: string | undefined, index: number) => {
      setCheckedInput(false)
      setCurrentInput(newText)
      setIsReadOnly(correctValue !== undefined ? false : true)
      setCurrentTab(index)
      setCorrectValue(correctValue !== undefined ? correctValue : "")
    }
  
    return (
      <div>
        <div className="flex mx-3 my-2">
          {
            test.lessonName.tabs.map((value, index) => {
              return (
                <div className="flex mr-8" key={`editor-tab-${index}`}>
                  <label htmlFor={`editor-tab-${index}`}>{value.tabName}
                    <input
                      type="radio"
                      name="tabs"
                      id={`editor-tab-${index}`}
                      key={`editor-tab-${index}`}
                      value={currentTab === index ? "on" : "off"}
                      data-id={test.lessonName.defaultTab === index ? toBeSelectedId : undefined}
                      onClick={() => handleTabChange(
                        value.defaultValue,
                        value?.correctValue,
                        index
                      )}
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
          modified={currentInput !== "" && checkedInput ? correctValue : ""}
          height="12vh"
          width="100%"
          language="sol"
          options={{ renderSideBySide: false, minimap: { enabled: false } }}
        />
        <button onClick={handleCheckedInput}>Click me</button>
      </div>
    )
}

export default EditorPanel;