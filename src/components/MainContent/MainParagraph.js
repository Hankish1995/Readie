import React from "react";
import { google_play, apple_store } from "../../utils/MainImages/MainImages";

const MainParagraph = () => {
    return (
        <>
            <div className="main-paragraph">
                <div className="main-paragraph-text">
                    <span className="main-paragraph-content">
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br /> Just click “Edit Text” or double click me to add your own content and <br />make changes to the font.
                    </span>
                    <div className="main-paragraph-image">
                        <img src={google_play} alt="google play" />
                        <img src={apple_store} alt="apple store" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainParagraph