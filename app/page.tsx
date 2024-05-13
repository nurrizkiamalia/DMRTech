import Hero from "./components/Hero"
import Image from "next/image";
import planet from "@/public/assets/Planet.png"
import CompanyOverview from "./components/CompanyOverview";
import ServiceOverview from "./components/ServiceOverview";
import Testimonials from "./components/Testimonials";

export default function Home() {
  const bgStyle = "bg-fixed bg-cover bg-center bg-no-repeat bg-blend-darken h-[200px] w-full"


  return (
    <div className="relative  bg-black bg-opacity-50">
        <Hero />
        
        <CompanyOverview />
        <div className={`bg-imgDivider2 ${bgStyle}`}></div>
        <ServiceOverview />
        <div className={`bg-imgDivider3 ${bgStyle}`}></div>
        <Testimonials />
    </div>
  );
}
