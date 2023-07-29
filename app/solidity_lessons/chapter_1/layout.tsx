import Footer from "@/app/common_components/footer";
import Navbar from "../../common_components/navbar";

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Navbar />
      <main className='flex min-h-full grow flex-col'>
        {children}
        <Footer />
      </main>
    </>
  );
};


export default RootLayout;