import React from "react";
import { enc_auto_image } from "../../utils/MainImages/MainImages";

const MainEncAuto = () => {
    return (
        <>
            <div className="yellow-card">
                <div className="enc-image">
                    <div className="enc-current">
                        <img className="enc-selected-image" src={enc_auto_image} alt="enc image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainEncAuto