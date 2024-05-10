import React from "react";
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import "../../index.css"
import AppRouter from "./AppRouter/AppRouter";


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter} />)



