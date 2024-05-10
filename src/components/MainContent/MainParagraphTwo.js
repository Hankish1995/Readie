import React from "react";
import { main_paragraph_two_image } from "../../utils/MainImages/MainImages";

const MainParagraphTwo = () => {
    return (
        <>
            <div className="main-paragraph-two">
                <div className="main-paragraph-two-content">
                    <h2 main-paragraph-content>How Children Can Use the App</h2>
                </div>
                <div className="hlo">
                    <img src={main_paragraph_two_image} alt="content_image" />
                </div>
                <div className="margin-from-top">
                    <span className="main-paragraph-content">
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br /> Just click “Edit Text” or double click me to add your own content and <br />make changes to the font.
                    </span>
                </div>

            </div>

        </>
    )
}

export default MainParagraphTwo