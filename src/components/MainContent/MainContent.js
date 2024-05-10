import React from "react";
import MainLayout from "./MainLayout";
import MainBase from "./MainBase";
import MainParagraph from "./MainParagraph";
import MainParagraphTwo from "./MainPAragraphTwo";
import MainReady from "./MainReady";
import MainReadyImage from "./MainReadyContent";
import MainEncAuto from "./MainEncAuto";
import MainAward from "./MainAward";

const MainContent = () => {
    return (
        <>
            <MainLayout />
            <MainBase />
            <MainParagraph />
            <MainParagraphTwo />
            <MainReady />
            <MainReadyImage />
            <MainEncAuto />
            <MainAward />
        </>
    )
}

export default MainContent