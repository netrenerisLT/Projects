import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header.jsx";
import LineSvg from "../components/LineSvg.jsx";
import Footer from "../components/footer/Footer.jsx";

export const metadata = {
  title: "SilvaDev - Rooted in Digital",
  description: "Let us guide you through the digital forest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full font-montserrat font-medium bg-colBlack ">
        {/* <header className="w-screen bg-colJetBlack h-20 items-center grid gap-4 grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 px-4 md:px-8 2xl:px-14">
          <Header />
        </header> */}
        <header className="bg-colJetBlack h-20 fixed w-full z-50">
          <Header />
        </header>
        <div className="flex w-full">
          <div className="bg-colBlack basis-3/12 -z-10 relative">
            <span className="relative left-full w-2">
              <LineSvg />
            </span>
          </div>
          <div className=" basis-9/12">
            {children}
            
              <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
