import "./globals.css";
import Header from "../components/header/Header.jsx";
import LineSvg from "../components/others/LineSvg.jsx";
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
        <header className=" h-20 fixed w-full z-50 mix-blend-difference">
          <Header />
        </header>
        <div className="flex w-screen">
          <div className="bg-colBlack w-3/12 z-10 relative">
            <span className="md:hidden absolute top-10 left-[20%] h-[100%]">
              <LineSvg />
            </span>
            <span className="absolute top-10 left-[100%] h-[100%]">
              <LineSvg />
            </span>
          </div>
          <div className="w-9/12">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
