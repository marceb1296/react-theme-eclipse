import React from "react";

export interface ITheme {
    lightColor?: string;
    darkColor?: string;
    position?: "start" | "center"| "end";
    initialValue: ETheme;
    dispatch: (theme: ETheme) => void;
    asNavIcon?: boolean;
}

export enum ETheme {
    LIGHT = "light",
    DARK = "dark"
}

export enum EPosition {
    START = "start",
    CENTER = "center",
    END = "end"
}

export enum ESetTheme {
    SET_MENU = "SET MENU"
}