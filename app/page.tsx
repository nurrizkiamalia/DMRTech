import Hero from "./components/Hero"
import Image from "next/image";
import planet from "@/public/assets/Planet.png"
import CompanyOverview from "./components/CompanyOverview";
import ServiceOverview from "./components/ServiceOverview";
import Testimonials from "./components/Testimonials";

export default function Home() {
  const bgStyle = "bg-dspGray h-[200px] w-full max-lg:h-[100px]"


  return (
    <div className="relative bg-opacity-50">
        <Hero />
        
        <CompanyOverview />
        <div className={`${bgStyle}`}></div>
        <ServiceOverview />
        <div className={`${bgStyle}`}></div>
        <Testimonials />
    </div>
  );
}
