import React from "react";
import { award_image, train_image, alphabtets, dots, patch_image } from "../../utils/MainImages/MainImages";

const MainBase = () => {
    return (
        <>
            <div className="main-base">
                <div className="inner-card">
                    <div className="inner-image">
                        <img src={award_image} alt="" className="inner-image-card" />
                    </div>
                    <div className="inner-base-text">
                        <h4>Award</h4>
                        <h4>Winning</h4>
                    </div>
                </div>
                <div className="inner-card">
                    <div className="inner-image">
                        <img src={train_image} alt="" className="inner-image-card" />
                    </div>
                    <div className="inner-base-text">
                        <h4>Progress</h4>
                        <h4>Tracking</h4>
                    </div>
                </div>
                <div className="inner-card">
                    <div className="inner-image">
                        <img src={alphabtets} alt="" className="inner-image-card" />
                    </div>
                    <div className="inner-base-text">
                        <h4>Easy</h4>
                        <h4>To Use</h4>
                    </div>
                </div>
                <div className="inner-card">
                    <div className="inner-image">
                        <img src={dots} alt="" className="inner-image-card" />
                    </div>
                    <div className="inner-base-text">
                        <h4>Interactive and</h4>
                        <h4>Intuitive</h4>
                    </div>
                </div>
                <div className="inner-card">
                    <div className="inner-image">
                        <img src={patch_image} alt="" className="inner-image-card" />
                    </div>
                    <div className="inner-base-text">
                        <h4> High-Quality</h4>
                        <h4>Content</h4>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainBase