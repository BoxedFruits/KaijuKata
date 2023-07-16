import { Bowlby_One_SC, Bungee } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const bowlby_one_sc = Bowlby_One_SC({ subsets: ["latin"], weight: ["400"] });
const bungee = Bungee({ subsets: ["latin"], weight: ["400"] });

interface ICourseTile {
  imagePath: string,
  text: string,
  link: string
}

export default function Home() {

  const CourseTile = ({ imagePath, text, link }: ICourseTile) => {
    return (
      <Link className="relative border-4 rounded-xl border-[#DE2323]" href={link}>
        <Image className="blur-sm rounded-xl" src={imagePath} height={360} width={360} alt="" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className={`${bungee.className} text-2xl`}>{text}</h1>
        </div>
      </Link>
    );
  };

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-24" style={{ height: "100vh" }}>
        <Image className="absolute z-0 bottom-0 left-1/3" src="/terminal.gif" alt="terminal" width={1889} height={564}></Image>
        <div className="flex absolute w-full h-full top-0" style={{ background: "linear-gradient(#10101000 50%,#00000014 10%,#000000)" }}></div>
        <div className="z-10 md:mt-16">
          <h1 className={`${bowlby_one_sc.className} mb-12 tracking-widest text-5xl md:text-9xl text-[#DE2323] bg-clip-text`} style={{
            backgroundImage: "url('/skyline.gif')",
            WebkitTextFillColor: "#ff3a3a59"
          }}
          >Kaiju Kata</h1>
          <div className={bungee.className}>
            <div>
              <h2 className="mb-1 text-sm md:text-2xl">Become a shadowy super-coder.</h2>
              <h2 className="text-sm md:text-2xl">Created by degens, for degens.</h2>
            </div>
            <div>
              <h3 className="mb-0 text-xs md:text-lg">An Opensource learning platform for web3 development.</h3>
              <h3 className="text-xs md:text-lg">Learn, develop, contribute.</h3>
            </div>
          </div>
        </div>
        <div className="animate-bounce">
          <Image className="relative" src="/down-arrow.svg" height={20} width={30} alt="down arrow"></Image>
          <Image className="relative -top-4" src="/down-arrow.svg" height={20} width={30} alt="down arrow"></Image>
          <Image className="relative -top-8" src="/down-arrow.svg" height={20} width={30} alt="down arrow"></Image>
        </div>
      </div>
      <div className="h-5/6 w-full mt-44">
        <div className={`${bowlby_one_sc.className} text-5xl flex justify-center mb-16`}>Courses</div>
        <div className="flex flex-wrap gap-32 m-16 justify-center">
          <CourseTile imagePath="/shadowy_super_coder.jpg" text="Solidity" link="solidity_lessons"></CourseTile>
          <CourseTile imagePath="/snakeguy.jpg" text="Vyper" link="vyper_lessons"></CourseTile>
          <CourseTile imagePath="/egyptian_bird.jpg" text="Cairo" link="cairo_lessons"></CourseTile>
        </div>
      </div>
    </main >
  );
}
