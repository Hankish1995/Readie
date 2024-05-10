import React from "react";
import { prize_tag } from "../../utils/MainImages/MainImages";

const MainAward = () => {
    return (
        <>
            <div className="award-winning">
                <div className="award-text">
                    <h1 className="award-win">Award Winning</h1>
                </div>
                <div className="grid-class">
                    <div className="grid-template">
                        <div className="prize-body">
                            <img src={prize_tag} alt="consoluded peize iamge" />
                        </div>
                        <div className="prize-text">
                            <p>Kid's Ed Choice</p>
                            <p>(Best App 2035)</p>
                        </div>
                    </div>
                    <div className="grid-template">
                        <div className="prize-body">
                            <img src={prize_tag} alt="consoluded peize iamge" />
                        </div>
                        <div className="prize-text">
                            <p>Kid's Ed Choice</p>
                            <p>(Best App 2035)</p>
                        </div>
                    </div>
                    <div className="grid-template">
                        <div className="prize-body">
                            <img src={prize_tag} alt="consoluded peize iamge" />
                        </div>
                        <div className="prize-text">
                            <p>Kid's Ed Choice</p>
                            <p>(Best App 2035)</p>
                        </div>
                    </div>
                    <div className="grid-template">
                        <div className="prize-body">
                            <img src={prize_tag} alt="consoluded peize iamge" />
                        </div>
                        <div className="prize-text">
                            <p>Kid's Ed Choice</p>
                            <p>(Best App 2035)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainAward