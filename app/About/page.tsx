import StatisticCompany from "@/components/StatisticCompany"
import AboutUs from "./components/AboutUs/AboutUs"
import CompanyCulture from "./components/CompanyCulture/CompanyCulture"
import Milestone from "./components/Milestone"
import OurTeam from "./components/OurTeam"
import VisionMission from "./components/VisionMission"

const About: React.FC = () =>{
    return(
        <>
        <div className="about font-raleway">
            
            <AboutUs />
            <StatisticCompany />
            <Milestone />
            <VisionMission />
            <OurTeam />
            <CompanyCulture />
        </div>
        </>
    )
}

export default About