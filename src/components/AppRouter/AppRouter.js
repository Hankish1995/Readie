import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../AppLayout";
import ErrorPage from "../ErrorComponent/ErrorPage";
import MainContent from "../MainContent/MainContent";
import Tasks from "../Tasks/Tasks";
import About from "../About/About";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <MainContent />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/tasks",
                element: <Tasks />
            }
        ],
        errorElement: <ErrorPage />
    }
])

export default AppRouter