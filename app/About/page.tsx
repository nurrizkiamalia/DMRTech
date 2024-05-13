import AboutUs from "./components/AboutUs"
import CompanyCulture from "./components/CompanyCulture"
import OurBenefit from "./components/OurBenefit"
import OurTeam from "./components/OurTeam"

const About: React.FC = () =>{
    return(
        <>
            <AboutUs />
            <OurBenefit />
            <OurTeam />
            <CompanyCulture />
        </>
    )
}

export default About