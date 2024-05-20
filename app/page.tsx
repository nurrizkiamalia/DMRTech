import Hero from "./components/Hero"
import CompanyOverview from "./components/CompanyOverview";
import ServiceOverview from "./components/ServiceOverview";
import Testimonials from "./components/Testimonials";
import TaglineBanner from "@/components/TaglineBanner";
import PartnerBanner from "@/components/PartnerBanner";

export default function Home() {
  return (
    <div className="home">
        <Hero />
        <div className="xl:-rotate-3 ">
          <TaglineBanner  />
        </div>
        <CompanyOverview />
        <div className="xl:rotate-3">
          <PartnerBanner />
        </div>
        <ServiceOverview />
        <div className="xl:-rotate-3 ">
          <TaglineBanner  />
        </div>
        <Testimonials />
    </div>
  );
}
