import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header/Header.jsx";
import LineSvg from "@/components/others/LineSvg.jsx";
import Footer from "@/components/footer/Footer.jsx";
import ProgressBar from "../../components/others/ProgressBar";

export const metadata = {
  metadataBase: new URL("https://silvadev.com"),
  generator: "SilvaDev",
  applicationName: "SilvaDev",
  title: {
    template: "%s - SilvaDev",
    default: "Svetainių ir el. parduotuvių kūrimas - SilvaDev",
  },
  description:
    "Interneto svetainių kūrimas. Elektroninių parduotuvių kūrimas. Kuriame modernias, funkcionalias ir profesionalias svetaines. Programavimo ir SEO paslaugos.",
  keywords: [
    "Svetainių kūrimas",
    "Puslapių kūrimas",
    "El. parduotuvių kūrimas",
    "Internetinė parduotuvė",
    "Elektroninių parduotuvių kūrimas",
    "Programavimo paslaugos",
    "Interneto svetainių priežiūra",
    "SEO optimizavimas",
  ],
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "SilvaDev", url: "https://www.silvadev.com/" },
    { name: "Aurelija Beitaitė", url: "https://www.aurelijabeitaite.com/" },
  ],
  creator: "SilvaDev",
  openGraph: {
    title: "Svetainių ir el. parduotuvių kūrimas - SilvaDev",
    description:
      "Interneto svetainių kūrimas. Elektroninių parduotuvių kūrimas. Kuriame modernias, funkcionalias ir profesionalias svetaines. Programavimo ir SEO paslaugos.",
    url: "https://silvadev.com",
    siteName: "SilvaDev",
    images: [
      {
        url: "https://i.imgur.com/Nl9eiux.png", // Must be an absolute URL
        width: 798,
        height: 81,
      },
    ],
    locale: "lt_LT",
    type: "website",
  },
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className="w-screen h-full font-montserrat font-medium bg-colBlack relative">
        <Header />
        {/* <MobileHeader /> */}
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
            <SpeedInsights />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
