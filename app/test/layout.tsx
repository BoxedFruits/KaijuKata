import Navbar from "../common_components/navbar";

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
  );
};


export default LessonLayout;