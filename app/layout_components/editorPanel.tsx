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

  const selectedTabStyle = "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"

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
    <div className="flex flex-col grow ">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 flex mx-3 my-2">
        {
          test.lessonName.tabs.map((value, index) => {
            return (
              <ul className="flex" key={`editor-tab-${index}`}>
                <li className="mr-2">
                  <label className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${currentTab === index ? selectedTabStyle : ''}`} htmlFor={`editor-tab-${index}`}>{value.tabName}
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
                </li>
              </ul>
            )
          })}
      </div>
      <Editor
        defaultValue={test.lessonName.tabs[test.lessonName.defaultTab].defaultValue}
        value={currentInput}
        height="75%"
        language="sol"
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        options={{ minimap: { enabled: false }, readOnly: isReadOnly }}
      />
      <div>
        <button style={{ border: "2px solid red" }} onClick={handleCheckedInput}>Check Answer</button>
      </div>
      <DiffEditor
        original={currentInput !== "" && checkedInput ? currentInput : ""}
        modified={currentInput !== "" && checkedInput ? correctValue : ""}
        height="10%"
        language="sol"
        options={{ renderSideBySide: false, minimap: { enabled: false } }}
      />
    </div>
  )
}

export default EditorPanel;