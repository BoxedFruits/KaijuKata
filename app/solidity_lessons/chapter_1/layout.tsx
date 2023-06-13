import Navbar from '../../common_components/navbar'

const LessonLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
     return (
        <>
            <Navbar/>
            <main className='flex min-h-full grow'>{children}</main>
        </>
    )
}


export default LessonLayout;