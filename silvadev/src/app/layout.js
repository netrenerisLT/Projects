import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header.jsx";

export const metadata = {
  title: "SilvaDev - Rooted in Digital",
  description: "Let us guide you through the digital forest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full font-montserrat font-medium bg-colBlack">
        {/* <header className="w-screen bg-colJetBlack h-20 items-center grid gap-4 grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 px-4 md:px-8 2xl:px-14">
          <Header />
        </header> */}
        <header className="bg-colJetBlack h-20 px-4 md:px-8 2xl:px-14 fixed w-full z-50">
          <Header />
        </header>
        <div className="px-4 md:px-8 2xl:px-14 flex w-full">
          <div className="bg-colWaterLeaf basis-3/12 z-10"></div>
          <div className=" basis-9/12">{children}</div>
        </div>
      </body>
    </html>
  );
}
