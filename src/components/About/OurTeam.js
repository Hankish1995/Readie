import React from "react";
import { ourTeamData } from "../../utils/ourTeam/ourTeam";

const OurTeam = () => {
    return (
        <>
            <div className="main-team">
                <div className="our-team">
                    <h1>Our Team</h1>
                </div>
                {
                    ourTeamData?.map((data, i) => {
                        return (
                            <div className="adjust-flex">
                                <div className="team-image">
                                    <img src={data?.image} alt="" className="adjust-width-image" />
                                </div>
                                <div className="team-description">
                                    <div className="description-content">
                                        <h2>{data?.name}</h2>
                                    </div>
                                    <div className="description-content">
                                        <h3>I have {data?.experience} Experience</h3>
                                    </div>
                                    <div className="description-content">
                                        <h3>{data?.skills?.join()}</h3>
                                    </div>
                                    <div className="description-content">
                                        <h5>I ma {data?.position}</h5>
                                    </div>
                                    <div className="description-content">
                                        <p> {data?.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default OurTeam