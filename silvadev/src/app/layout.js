import "./globals.css";
import Header from "@/components/header/Header.jsx";
import LineSvg from "@/components/others/LineSvg.jsx";
import Footer from "@/components/footer/Footer.jsx";
import ProgressBar from "../components/others/ProgressBar";
import MobileHeader from "@/components/header/MobileMenu";

export const metadata = {
  title: "SilvaDev - Rooted inDigital",
  description: "Let us guide you through the digital forest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen h-full font-montserrat font-medium bg-colBlack ">
        <Header />
        <MobileHeader />
        <div className="flex w-full overflow-hidden">
          <ProgressBar />
          <div className="bg-colTransparent w-3/12 z-10 relative">
            <span className="md:hidden absolute top-0 left-[20%] h-[100%]">
              <LineSvg />
            </span>
            <span className="absolute top-0 left-[100%] h-[100%]">
              <LineSvg />
            </span>
          </div>
          <div className="w-9/12 relative">
            <span className="max-sm:hidden absolute top-0 right-[46px] xl:right-[94px] 2xl:right-[142px] h-[99%]">
              <LineSvg />
            </span>
            <span className="max-sm:hidden absolute top-0 lg:right-[22%] xl:right-[24.5%] 2xl:right-[25%] h-[99%]">
              <LineSvg />
            </span>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
