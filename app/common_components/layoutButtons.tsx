import Link from 'next/link';
import './layoutButtons'

export interface LayoutButtonsProps {
    className?: string;
    prevRoute:string;
    nextRoute:string;
}

const LayoutButtons = (props : LayoutButtonsProps) => {
    return (
        <div>
            {/* there should be a better way of doing this without using position absolute.  */}
            <div className="layout-buttons absolute bottom-10 w-full">
                <Link className="float-left ml-8" href={props.prevRoute}>Back</Link>
                <Link className="float-right mr-8" href={props.nextRoute}>Next</Link>
            </div>
        </div>
    )
}

export default LayoutButtons;