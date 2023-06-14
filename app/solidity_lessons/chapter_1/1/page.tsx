"use client"

import LayoutButtons from "@/app/common_components/layoutButtons"
import EditorPanel from "../../../common_components/editorPanel"
import TwoPanelLayout from "../../../common_components/twoPanelLayout"
import CodeSnippet from "@/app/common_components/codeSnippet"

// const codeBlock = `
// fn main() {
//   // Statements here are executed when the compiled binary is called.

//   // Print text to the console.
//   println!("Hello World!");
// }
// `

export default function Page() {
  return (
    <TwoPanelLayout>
      <div className="m-6">
        <div className="lesson-content">
          <h1 className="font-bold">Chapter 1: Lesson Overview</h1>
          <p>{"In Lesson 1, you\'re going to build a \"Zombie Factory\" to build an army of zombies.\""}</p>
          <ul className="list-disc ps-5">
            <li className="ps-2">Our factory will maintain a database of all zombies in our army</li>
            <li className="ps-2">Our factory will have a function for creating new zombies</li>
            <li className="ps-2">Each zombie will have a random and unique appearance</li>
          </ul>
          <p>{"In later lessons, we\'ll add more functionality, like giving zombies the ability to attack humans or other zombies! But before we get there, we have to add the basic functionality of creating new zombies."}</p>
          <h2>
            {"How Zombie DNA Works"}
          </h2>
          <p>{"The zombie's appearance will be based on its \"Zombie DNA\". Zombie DNA is simple — it's a 16-digit integer, like:"}</p>
          <code className="flex grow backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-300/30 lg-rounded">8356281049284737</code>
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
          {/* <CodeSnippet codeBlock={codeBlock} language="solidity" /> */}
        </div>
        <LayoutButtons
          prevRoute="/solidity_lessons/chapter_1"
          nextRoute="/solidity_lessons/chapter_1/2" />
      </div>
      <EditorPanel />
    </TwoPanelLayout>
  )
}