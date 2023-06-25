import Image from "next/image";
import { CurrentTabInfo } from "./editorPanel";

interface TabProps {
  key: string,
  index: number,
  currentTabInfo: CurrentTabInfo,
  tabInfo: TabInfo,
  handleTabChange: Function,
  toBeSelectedId: string,
  defaultSelectedTab: number
}

export interface LessonInfo { //Type for the API call
  lessonName: {
    defaultTab: number,
    tabs: TabInfo[]
  }
}

export interface TabInfo {
  tabName: string,
  language: string,
  defaultValue: string,
  correctValue?: string
}

// enum Language { // TODO: figure out why this is not working
//   SOL = "sol",
//   JS = "js",
//   TS = "ts",
//   HTML = "html",
// }

const selectedTabStyle = "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
const getIcon = (language: string) => {
  switch (language) {
  case "sol":
    return <Image src="/file_type_solidity.svg" alt="solidity" height={24} width={24}></Image>;
  case "js":
    return <Image src="/file_type_js.svg" alt="javascript"></Image>;
  case "ts":
    return <Image src="/file_type_typescript.svg" alt="typescript"></Image>;
  case "html":
    return <Image src="/file_type_html.svg" alt="html" height={24} width={24}></Image>;
  }
};


const Tab = ({index, currentTabInfo, tabInfo, defaultSelectedTab, toBeSelectedId, handleTabChange}: TabProps) => {
  return (
    <label className="flex align-middle cursor-pointer select-none" key={`editor-tab-${index}`}
      htmlFor={`editor-tab-${index}`}>
      <li className={`flex p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600  
        hover:border-gray-300 dark:hover:text-gray-300  
        ${currentTabInfo.index === index ? selectedTabStyle : ""}`}>
        {getIcon(tabInfo.language)}
        {tabInfo.tabName}.{tabInfo.language}
        <input
          type="radio"
          name="tabs"
          id={`editor-tab-${index}`}
          key={`editor-tab-${index}`}
          value={currentTabInfo.index === index ? "on" : "off"}
          data-id={defaultSelectedTab === index ? toBeSelectedId : undefined}
          onClick={() => handleTabChange(
            tabInfo.defaultValue,
            tabInfo?.correctValue,
            index,
            tabInfo.language
          )}
        />
      </li>
    </label>
  );
};

export default Tab;