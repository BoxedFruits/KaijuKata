"use client"
import * as test from "../../data/test.json" //TODO: this should come from an api

import Editor, { Monaco, DiffEditor } from "@monaco-editor/react"
import { type editor } from 'monaco-editor';
import { useEffect, useId, useRef, useState } from "react"
import Tab, { TabInfo } from "./tab";

export interface CurrentTabInfo {
  language: string,
  correctValue?: string,
  index: number,
  isReadonly: boolean
}


//TODO: this should be use an api call to get the data that is passed into it from page.tsx
const EditorPanel = () => {
  const [currentInput, setCurrentInput] = useState("")
  const [checkedInput, setCheckedInput] = useState(false)
  const [currentTabInfo, setCurrentTabInfo] = useState<CurrentTabInfo>({
    language: test.lessonName.tabs[test.lessonName.defaultTab].language,
    index: test.lessonName.defaultTab,
    correctValue: test.lessonName.tabs[test.lessonName.defaultTab]?.correctValue !== undefined ? test.lessonName.tabs[test.lessonName.defaultTab]?.correctValue : "",
    isReadonly: test.lessonName.tabs[test.lessonName.defaultTab]?.correctValue !== undefined ? false : true
  });

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
    if (currentTabInfo.isReadonly !== true) {
      setCheckedInput(true)
      setCurrentInput(editorRef!.current!.getValue())
    }
  }

  const handleTabChange = (newText: string, correctValue: string | undefined, index: number, language: string) => {
    setCheckedInput(false)
    setCurrentInput(newText)
    setCurrentTabInfo({
      language: language,
      correctValue: correctValue !== undefined ? correctValue : "",
      index: index,
      isReadonly: correctValue !== undefined ? false : true
    })
  }

  return (
    <div className="flex flex-col grow ">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 flex mx-3 my-2">
        <ul className="flex">
          {
            test.lessonName.tabs.map((tabInfo: TabInfo, index) => {
              return (
                <Tab
                  key={`${index}`}
                  index={index}
                  currentTabInfo={currentTabInfo}
                  tabInfo={tabInfo}
                  toBeSelectedId={toBeSelectedId}
                  defaultSelectedTab={test.lessonName.defaultTab}
                  handleTabChange={handleTabChange}
                />
              )
            })}
        </ul>
      </div>
      <Editor
        defaultValue={test.lessonName.tabs[test.lessonName.defaultTab].defaultValue}
        value={currentInput}
        height="75%"
        language={currentTabInfo?.language}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        options={{ minimap: { enabled: false }, readOnly: currentTabInfo.isReadonly }}
      />
      <div>
        <button
          style={{ border: "2px solid red" }}
          onClick={handleCheckedInput}
          disabled={currentTabInfo.isReadonly}
        >Check Answer</button>
      </div>
      <DiffEditor
        original={currentInput !== "" && checkedInput ? currentInput : ""}
        modified={currentInput !== "" && checkedInput ? currentTabInfo.correctValue : ""}
        height="10%"
        language={currentTabInfo?.language}
        options={{ renderSideBySide: false, minimap: { enabled: false } }}
      />
    </div>
  )
}

export default EditorPanel;