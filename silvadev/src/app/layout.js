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
      <body className="w-screen h-screen  font-montserrat font-medium bg-colBlack">
        <header className="w-screen bg-colJetBlack h-20 items-center grid gap-4 grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 px-4 md:px-8 2xl:px-14">
          <Header />
        </header>
        <div className="h-[calc(100vh-5rem)] w-screen">{children}</div>
      </body>
    </html>
  );
}
