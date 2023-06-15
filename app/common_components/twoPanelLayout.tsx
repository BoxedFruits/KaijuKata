"use client";

import React, { ReactElement } from "react";

const TwoPanelLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const childrenArray = React.Children.toArray(children);
  const minWidths = window.innerWidth * (5 / 16) - 4

  const [panelWidths, setPanelWidths] = React.useState({
    leftPanelWidth: window.innerWidth * (6 / 16) - 4,
    rightPanelWidth: window.innerWidth * (10 / 16) - 4
  })

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  const handleMouseUp = (e: MouseEvent) => {
    document.removeEventListener('mousemove', handleMouseMove);
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (e.clientX - 4 >= minWidths && window.innerWidth - e.clientX - 4 >= minWidths) {
      setPanelWidths({
        leftPanelWidth: e.clientX - 4,
        rightPanelWidth: window.innerWidth - e.clientX - 4
      })
    }
  }

  return (
    <div className="flex flex-row min-h-full grow">
      <div className="left-panel relative flex grow rounded-md pb-6 pt-4 pl-2 pr-1" style={{ width: panelWidths.leftPanelWidth }}>
        <div className="rounded-md backdrop-blur-2xl dark:bg-zinc-600/30 border-slate-900">
          {childrenArray[0]}
        </div>
      </div>
      <div className="dividerthinng group flex h-full items-center justify-center transition hover:bg-sky-500
            active:bg-sky-500 dark:hover:bg-dark-blue-s hover:cursor-col-resize"
        style={{ width: ".4rem" }}
        onMouseDown={(e) => handleMouseDown(e)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 14" width="2" height="14" fill="currentColor"
          className="text-gray-5 dark:text-dark-gray-5 transition -translate-y-6 
              group-hover:text-white dark:group-hover:text-white">
          <circle r="1" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1 1)"></circle><circle r="1" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1 7)"></circle>
          <circle r="1" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1 13)"></circle>
        </svg>
      </div>
      <div className="right-panel relative flex grow pb-6 pt-4 pr-2 pl-1" style={{ width: panelWidths.rightPanelWidth }}>
        <div className="flex overflow-x-hidden rounded-md backdrop-blur-2xl dark:bg-zinc-600/30 border-slate-900">
        {React.cloneElement(childrenArray[1] as ReactElement, { width: panelWidths.rightPanelWidth + "px" })}
        </div>
      </div>
    </div >
  )
}

export default TwoPanelLayout;