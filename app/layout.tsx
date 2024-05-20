import type { Metadata } from "next";
import { DM_Sans, Raleway, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/Header/MainHeader";
import Footer from "@/components/Footer/Footer";
import HeadManager from "@/app/HeadManager"; // Import the HeadManager

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
      <head>
        <style>{`
          /* Add your critical CSS here */
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
          }
          .bg-black { background-color: #000; }
          .text-white { color: #fff; }
          .overflow-x-hidden { overflow-x: hidden; }
          .w-full { width: 100%; }
          /* Add other critical Tailwind utility classes as needed */
        `}</style>
        <HeadManager /> {/* Include HeadManager component */}
      </head>
      <body className={`${dmSans.variable} ${bricolage.variable} ${raleway.variable} text-white`} suppressHydrationWarning={true}>
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
