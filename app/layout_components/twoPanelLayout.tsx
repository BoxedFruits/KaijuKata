import React from "react";

const TwoPanelLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const childrenArray = React.Children.toArray(children);

    return (
        <div className="flex flex-row">
            <div className="w-1/2">
                {childrenArray[0]}
            </div>
            <div className="w-1/2">
                {childrenArray[1]}
            </div>
        </div >
    )
}

export default TwoPanelLayout;