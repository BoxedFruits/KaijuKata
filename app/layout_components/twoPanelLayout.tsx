import React from "react";

const TwoPanelLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const childrenArray = React.Children.toArray(children);

    return (
        <div className="flex flex-row">
            <div className="w-1/2 left-panel relative">
                {childrenArray[0]}
            </div>
            <div className="w-1/2 right-panel">
                {childrenArray[1]}
            </div>
        </div >
    )
}

export default TwoPanelLayout;