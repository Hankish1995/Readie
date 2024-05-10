import React from "react";
import { about_us_our_mission } from "../../utils/SiteImages/Images";

const AboutUsOurMission = () => {
    return (
        <>
            <div className="our-mission">
                <div className="mission-content">
                    <div className="inner-text">
                        <h3 className="mission-text">Our Story</h3>
                        <h5 className="mission-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h5>
                    </div>
                </div>
                <div className="mission-image">
                    <img className="mission-default-image" src={about_us_our_mission} alt="mision-image" />
                </div>
            </div>
        </>
    )
}

export default AboutUsOurMission