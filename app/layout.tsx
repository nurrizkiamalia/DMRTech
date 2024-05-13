import type { Metadata } from "next";
import { DM_Sans, Raleway, Bricolage_Grotesque} from "next/font/google";
import Image from "next/image";
import planet from "@/public/assets/Planet.png"
import "./globals.css";
import MainHeader from "@/components/Header/MainHeader";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer/page";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans', 
  display: "swap",
  weight: ["300", "400", "500", "600","700"]
});

const bricolage = Bricolage_Grotesque({
   subsets: ["latin", "latin-ext"], 
   weight: ["400","500","600","700","800"],
   variable: "--font-bricolage",
   display: "swap",
});

const raleway = Raleway({ 
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500","600","700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "DMRTech",
  description: "Build the fastest website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-dspBlack overflow-x-hidden w-screen" suppressHydrationWarning={true}>
      <body className={`${dmSans.variable} ${bricolage.variable} ${raleway.variable} text-white`}>
        <MainHeader />
        <div className="fixed bg-black -z-10 opacity-80 w-screen h-screen flex justify-center items-center">
          <Image 
          src={planet}
          alt="planet"
          className="animate-spin-slow "
          priority/>
        </div>
        <SocialMedia />
        {children}
        <Footer />
      </body>
    </html>
  );
}
