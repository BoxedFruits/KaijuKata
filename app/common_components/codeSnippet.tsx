import { Prism, Highlight, themes } from "prism-react-renderer"

interface CodeSnippetProps {
  codeBlock: string
  language: string
}

// @ts-ignore
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-solidity");

const CodeSnippet = ({ codeBlock, language }: CodeSnippetProps) => {
  return (
    <Highlight
      theme={themes.shadesOfPurple}
      code={codeBlock}
      language={"solidity"}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {/* <span>{i + 1}</span> */}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeSnippet;