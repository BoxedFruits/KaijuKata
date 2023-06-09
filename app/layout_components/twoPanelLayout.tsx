"use client";

import React from "react";

const TwoPanelLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const childrenArray = React.Children.toArray(children);
  const [panelWidths, setPanelWidths] = React.useState({
    leftPanelWidth: window.screen.availWidth * (2 / 3),
    rightPanelWidth: window.screen.availWidth * (1 / 3)
  })

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    const handleMouseUp = (e: MouseEvent) => {
      document.removeEventListener('mousemove', handleMouseMove);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPanelWidths({
        leftPanelWidth: e.clientX,
        rightPanelWidth: window.screen.availWidth - e.clientX
      })
    }

    return (
      <div className="flex flex-row grow min-h-full">
        <div className="left-panel relative flex grow" style={{ minWidth: panelWidths.leftPanelWidth }}>
          {childrenArray[0]}
        </div>
        <div className="dividerthinng group flex h-full items-center justify-center transition 
            hover:bg-blue-s dark:hover:bg-dark-blue-s w-2 hover:cursor-col-resize"
            onMouseDown={(e) => handleMouseDown(e)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 14" width="2" height="14" fill="currentColor"
            className="text-gray-5 dark:text-dark-gray-5 transition -translate-y-6 
              group-hover:text-white dark:group-hover:text-white">
            <circle r="1" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1 1)"></circle><circle r="1" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1 7)"></circle>
            <circle r="1" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1 13)"></circle>
          </svg>
        </div>
        <div className="right-panel flex grow">
          {childrenArray[1]}
        </div>
      </div >
    )
  }

  export default TwoPanelLayout;