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
  const [currentInput, setCurrentInput] = useState(lessonInfo.lessonName.tabs[lessonInfo.lessonName.defaultTab].defaultValue)
  const [checkInput, setCheckInput] = useState(false)
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
    // @ts-ignore
    let modifiedEditor = editor.getModifiedEditor()
    modifiedEditor.onDidChangeModelContent((_) => {
      console.log("changed " + modifiedEditor.getValue());
      setCurrentInput(modifiedEditor.getValue())
    });
    editorRef.current = modifiedEditor;
    // editorRef.current = editor;
    monacoRef.current = monaco;
  }

  const handleCheckInput = () => {
    if (currentTabInfo.isReadonly !== true) {
      setCheckInput(true)
      console.log("check input ", currentTabInfo.correctValue, currentInput)
    }
  }

  const handleTabChange = (newText: string, correctValue: string | undefined, index: number, language: string) => {
    setCheckInput(false)
    setCurrentInput(newText) //this should be in currentTabInfo

    setCurrentTabInfo({
      language: language,
      correctValue: correctValue !== undefined ? correctValue : "",
      index: index,
      isReadonly: correctValue !== undefined ? false : true
    })
  }

  return (
    <div className="flex flex-col grow px-2 pt-1 pb-2">
      <div className="text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700 flex mx-2 my-1">
        <ul className="flex mb-0" style={{ borderBottom: "1px solid #f5f5dc69" }}>
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
      <DiffEditor
        original={checkInput === true ? currentTabInfo.correctValue : currentInput}
        modified={currentInput}
        // original={currentInput}
        // modified={checkInput === false ? currentTabInfo.correctValue : currentInput}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        width={width}
        height="10%"
        language={currentTabInfo?.language}
        options={{ renderSideBySide: false, minimap: { enabled: false }, readOnly: currentTabInfo.isReadonly }}
      />
      <div>
        <button
          style={{ border: "2px solid red" }}
          onClick={handleCheckInput}
          disabled={currentTabInfo.isReadonly}
        >{currentTabInfo.isReadonly ? "Read only" : "Check Answer"}</button>
      </div>
    </div>
  )
}

export default EditorPanel;