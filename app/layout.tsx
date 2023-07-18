import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KaijuKata",
  description: "Learn to code!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${inter.className}`}>
        {children}
        <Image
          src="/scientists_fixed.png"
          width={1400}
          height={400}
          alt="scientists"
        ></Image>
        <div className="w-full py-4 px-12 rounded-none border-t-[1px] border-light-border bg-light-bg mt-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <p className="text-xs lg:text-[14px] mb-0">
                Not affiliated with KaijuKingz or Augminted Labs
              </p>
            </div>
            <div className="flex flex-row md:flex-wrap md:justify-evenly text-xs lg-text[14px]">
              <div className="flex flex-col md:flex-row">
                <a
                  href="https://dashboard.kaijukingz.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-[1px] border-light-border ml-6"
                >
                  Dashboard
                </a>
                <a
                  href="https://medium.com/@AugmintedLabs/welcome-to-kaijumart-5ce56ed55761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-[1px] border-light-border ml-6"
                >
                  Medium
                </a>
                <a
                  href="https://kaijukingz.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-[1px] border-light-border ml-6"
                >
                  Main Site
                </a>
              </div>
              <div className="flex flex-col md:flex-row">
                <a
                  href="https://twitter.com/KaijuKingz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-[1px] border-light-border ml-6"
                >
                  Twitter
                </a>
                <a
                  href="https://discord.gg/kaiju-kingz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-[1px] border-light-border ml-6"
                >
                  Discord
                </a>
                <a
                  href="https://opensea.io/collection/kaiju-kingz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-[1px] border-light-border ml-6"
                >
                  Opensea
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
