import Link from 'next/link';
import './layoutButtons'

export interface LayoutButtonsProps {
    className?: string;
    prevRoute:string;
    nextRoute:string;
}

const LayoutButtons = (props : LayoutButtonsProps) => {
    return (

            <div className="layout-buttons flex m-2 bottom-4 justify-between w-full ">
                <Link className="float-left ml-8" href={props.prevRoute}>Back</Link>
                <Link className="float-right mr-8" href={props.nextRoute}>Next</Link>
            </div>
    )
}

export default LayoutButtons;