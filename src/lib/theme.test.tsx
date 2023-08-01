import { render, screen, fireEvent } from "../utils" 
import { ETheme } from "../types";
import { Theme } from "./theme";
import { vi } from "vitest";

interface ICustomTheme {
    theme: ETheme
    dispatch: (theme: string) => void
}

let handleTheme: ICustomTheme = {
    theme: ETheme.LIGHT,
    dispatch: (theme) => {
        console.log("CLICK")
        if (theme === ETheme.LIGHT)  {
            handleTheme = {
                ...handleTheme,
                theme: ETheme.DARK
            }
            return
        }
        handleTheme = {
            ...handleTheme,
            theme: ETheme.LIGHT
        }
    }
}

describe("Theme", () => {
    
    beforeEach(() => {
        render(
            <Theme dispatch={handleTheme.dispatch} initialValue={handleTheme.theme}/>
        )
    }),
    
    it("Should call dispatch fn", () => {
        const _dispatch = vi.spyOn(handleTheme, "dispatch")
        
        fireEvent.click(screen.getByLabelText("theme-handler"))
        
        expect(_dispatch).toHaveBeenCalled()
    })
})