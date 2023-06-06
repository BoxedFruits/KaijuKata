import Navbar from '../../layout_components/navbar'

const LessonLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
     return (
        <>
            <Navbar/>
            <main>{children}</main>
        </>
    )
}


export default LessonLayout;