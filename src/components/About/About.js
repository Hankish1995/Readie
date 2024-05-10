import React from "react";
import "./aboutUs.css"
import AboutUsOurMission from "./AboutUSOurMission";
import AboutUsOurStory from "./AboutUsOurStory";
import OurTeam from "./OurTeam";

const About = () => {
    return (
        <>
            <div className="main-about">
                <AboutUsOurMission />
                <AboutUsOurStory />
                <OurTeam />
            </div>
        </>
    )
}

export default About;