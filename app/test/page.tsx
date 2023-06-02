"use client"

import Editor, { Monaco, DiffEditor } from "@monaco-editor/react"
import { type editor } from 'monaco-editor';
import { useRef, useState } from "react"

export default function Page() {
  const [currentInput, setCurrentInput] = useState("")
  const goal = "pragma solidity ^0.8.0;"
  const monacoRef = useRef<Monaco | null>(null);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  function handleEditorWillMount(monaco: Monaco) {
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function handleEditorDidMount(editor: editor.IStandaloneCodeEditor, monaco: Monaco) {
    // here is another way to get monaco instance
    // you can also store it in `useRef` for further usage
    console.log(typeof editor)
    editorRef.current = editor;
    monacoRef.current = monaco;
    console.log(monaco.languages.typescript.javascriptDefaults.getExtraLibs())
  }

  return (
    <div>
      <Editor
        height="80vh"
        width="100vw"
        language="sol"
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        options={{minimap: {enabled: false}}}
      />
      <DiffEditor
        original={currentInput !== "" ? currentInput : "" }
        modified={currentInput !== "" ? goal : "" }
        height="15vh"
        width="100%"
        language="sol"
        // beforeMount={handleEditorWillMount}
        // onMount={handleEditorDidMount}
        options={{ renderSideBySide: false , minimap: {enabled: false}}}
      />
      <button onClick={() => {setCurrentInput(editorRef.current.getValue())} }>Click me</button>
    </div>
  )
}