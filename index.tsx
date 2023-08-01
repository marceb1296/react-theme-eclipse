import React from "react";
import { createRoot } from "react-dom/client";
import { UsingUseReducer, UsingRedux } from "./app";


const root = createRoot(document.getElementById("app") as HTMLElement);

root.render(
    <React.StrictMode>
        <UsingUseReducer />
    </React.StrictMode>
)