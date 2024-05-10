import React from "react";
import { turtel_image } from "../../utils/MainImages/MainImages";
const MainReadyImage = () => {
    return (
        <>
            <div className="main-ready-images">
                <div className="ready-image">
                    <div className="images-ready">
                        <img src={turtel_image} alt="" />
                    </div>
                    <div className="text-ready">
                        <p>“I'm a testimonial. Click to edit me</p>
                        <p>and add text that says something</p>
                        <p>nice about you and your services. Let</p>
                        <p>your customers review you and tell</p>
                        <p>their friends how great you are.”</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainReadyImage