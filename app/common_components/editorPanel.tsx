"use client"
import Editor, { Monaco, DiffEditor } from "@monaco-editor/react"
import { type editor } from 'monaco-editor';
import { useEffect, useId, useRef, useState } from "react"
import Tab, { LessonInfo, TabInfo } from "./tab";

export interface CurrentTabInfo {
  language: string,
  correctValue?: string,
  index: number,
  isReadonly: boolean
}

interface EditorPanelProps {
  width?: string,
  lessonInfo: LessonInfo
}

//TODO: this should be use an api call to get the data that is passed into it from page.tsx
const EditorPanel = ({ width, lessonInfo }: EditorPanelProps) => {
  const [currentInput, setCurrentInput] = useState("")
  const [checkedInput, setCheckedInput] = useState(false)
  const [currentTabInfo, setCurrentTabInfo] = useState<CurrentTabInfo>({
    language: lessonInfo.lessonName.tabs[lessonInfo.lessonName.defaultTab].language,
    index: lessonInfo.lessonName.defaultTab,
    correctValue: lessonInfo.lessonName.tabs[lessonInfo.lessonName.defaultTab]?.correctValue !== undefined ? lessonInfo.lessonName.tabs[lessonInfo.lessonName.defaultTab]?.correctValue : "",
    isReadonly: lessonInfo.lessonName.tabs[lessonInfo.lessonName.defaultTab]?.correctValue !== undefined ? false : true
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
    <div className="flex flex-col grow p-2">
      <div className="text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700 flex mx-3 my-2">
        <ul className="flex">
          {
            lessonInfo.lessonName.tabs.map((tabInfo: TabInfo, index) => {
              return (
                <Tab
                  key={`${index}`}
                  index={index}
                  currentTabInfo={currentTabInfo}
                  tabInfo={tabInfo}
                  toBeSelectedId={toBeSelectedId}
                  defaultSelectedTab={lessonInfo.lessonName.defaultTab}
                  handleTabChange={handleTabChange}
                />
              )
            })}
        </ul>
      </div>
      <Editor
        defaultValue={lessonInfo.lessonName.tabs[lessonInfo.lessonName.defaultTab].defaultValue}
        value={currentInput}
        height="75%"
        width={width}
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
        >{currentTabInfo.isReadonly ? "Read only" : "Check Answer"}</button>
      </div>
      <DiffEditor
        original={currentInput !== "" && checkedInput ? currentInput : ""}
        modified={currentInput !== "" && checkedInput ? currentTabInfo.correctValue : ""}
        width={width}
        height="10%"
        language={currentTabInfo?.language}
        options={{ renderSideBySide: false, minimap: { enabled: false } }}
      />
    </div>
  )
}

export default EditorPanel;