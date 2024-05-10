import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default AppLayout