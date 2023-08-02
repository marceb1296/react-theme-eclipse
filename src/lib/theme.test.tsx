import { render, screen, fireEvent, userEvent, waitFor } from "../utils" 
import { ETheme } from "../types";
import { Theme } from "./theme";
import { vi } from "vitest";




let handleTheme: ETheme = ETheme.LIGHT

function dispatch(theme: ETheme)  {
    handleTheme = theme
}


describe("Theme", () => {

    it("Should call dispatch fn", () => {
        const spyDispatch = vi.fn().mockImplementation(dispatch)

        render(
            <Theme dispatch={spyDispatch} initialValue={handleTheme}/>
        )

        fireEvent.click(screen.getByLabelText("theme-handler"))
        
        expect(spyDispatch).toHaveBeenCalled()
    })

    it("HandleTheme should be now Dark and 'theme-handler' should toogle 'active' class", async () => {
        render(
            <Theme dispatch={dispatch} initialValue={handleTheme}/>
        )

        expect(handleTheme).toBe(ETheme.DARK)
        expect(screen.getByLabelText("theme-handler").className).toBe("btn-theme active")

        fireEvent.click(screen.getByLabelText("theme-handler"))
        
        expect(handleTheme).toBe(ETheme.LIGHT)
        expect(screen.getByLabelText("theme-handler").className).toBe("btn-theme")
    })
})