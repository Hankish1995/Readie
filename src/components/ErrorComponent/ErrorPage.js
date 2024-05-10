import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../Header/Header";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <Header />
            <h1>This page is not found</h1>
        </>
    )
}

export default ErrorPage