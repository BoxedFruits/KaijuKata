import React from "react";

const TwoPanelLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const childrenArray = React.Children.toArray(children);

    return (
        <div className="flex flex-row grow min-h-full">
            <div className="w-1/2 left-panel relative flex grow">
                {childrenArray[0]}
            </div>
            <div className="w-1/2 right-panel flex grow">
                {childrenArray[1]}
            </div>
        </div >
    )
}

export default TwoPanelLayout;