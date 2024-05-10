import React from "react";
import "./content.css"
import { google_play, apple_store, main_image } from "../../utils/MainImages/MainImages";


const MainLayout = () => {
    return (
        <>
            <div className="main-layout">
                <div className="reading-section">
                    <div className="inner-section">
                        <p className="reading-text">
                            The App
                        </p>
                        <p className="reading-text">
                            That Makes
                        </p>
                        <p className="reading-text">
                            Reading Fun!
                        </p>
                        <div className="images-section">
                            <img src={google_play} alt="google play" />
                            <img src={apple_store} alt="apple store" />
                        </div>
                    </div>
                </div>
                <div className="image-section">
                    <img src={main_image} alt="main image" className="image-main" />
                </div>
            </div>
        </>
    )
}

export default MainLayout