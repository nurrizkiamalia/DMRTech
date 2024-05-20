import SubTitle from "@/components/SubTitle"
import TwoContent from "@/components/TwoContent"
import Projects from "./Projects"

const ProjectShowcase: React.FC = () => {
    return (
        <>
            <TwoContent className="!flex !flex-col !gap-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
                    <SubTitle className="col-start-1 w-fit"># Selected Work</SubTitle>
                    <h2 className="col-start-1 xl:text-heading2 lg:text-heading3 text-pXXL font-dmBricolage font-semibold md:b-5 mb-2">Project Showcase</h2>
                    <p className="col-start-1 font-raleway text-pL">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi animi magnam eaque quasi rerum, saepe aliquam praesentium vel.  </p>
                </div>
                <Projects />
          </TwoContent>  
        </>
    )
}

export default ProjectShowcase