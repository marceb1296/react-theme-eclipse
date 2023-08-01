import React from "react";

export interface ITheme<T = any> {
    lightColor?: string;
    darkColor?: string;
    position?: EPosition;
    initialValue: ETheme;
    dispatch: (theme: ETheme) => T;
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