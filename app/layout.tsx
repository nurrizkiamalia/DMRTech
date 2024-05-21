import type { Metadata } from "next";
import { DM_Sans, Raleway, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/Header/MainHeader";
import Footer from "@/components/Footer/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: "swap",
  weight: ["300", "400", "500", "600", "700"]
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className="bg-black overflow-x-hidden w-full">
      <body className={`${dmSans.variable} ${bricolage.variable} ${raleway.variable} text-white`} suppressHydrationWarning={true}>
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
