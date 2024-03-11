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
      <body className="w-screen h-screen flex flex-col items-center font-montserrat font-medium bg-colBlack">
        <header className="w-screen max-w-[2560px] bg-colJetBlack h-20 px-4 md:px-8 2xl:px-14">
          <Header />
        </header>
        <div className="h-[calc(100vh-5rem)] w-screen max-w-[2560px] px-4 md:px-8 2xl:px-14">
          {children}
        </div>
      </body>
    </html>
  );
}
