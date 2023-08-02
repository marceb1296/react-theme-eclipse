export interface ITheme {
    lightColor?: string;
    darkColor?: string;
    position?: "start" | "center" | "end";
    initialValue: ETheme;
    dispatch: (theme: ETheme) => void;
    asNavIcon?: boolean;
}
export declare enum ETheme {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum EPosition {
    START = "start",
    CENTER = "center",
    END = "end"
}
export declare enum ESetTheme {
    SET_MENU = "SET MENU"
}
