import "./globals.css";
import Header from "@/components/header/Header.jsx";
import LineSvg from "@/components/others/LineSvg.jsx";
import Footer from "@/components/footer/Footer.jsx";

export const metadata = {
  title: "SilvaDev - Rooted inDigital",
  description: "Let us guide you through the digital forest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full font-montserrat font-medium bg-colBlack ">
        <header className=" h-20 fixed w-full z-50 md:mix-blend-difference ">
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
