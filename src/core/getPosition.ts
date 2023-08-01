import { EPosition } from "../types"

export const getPosition = (position: string | undefined) => {
    if (position === EPosition.START) {
        return {
            left: "calc(0% + 50px)"
        }
    } 
    
    if (position === EPosition.CENTER) {
        return {
            left: "50%"
        }
    } 
    
    return {
        left: "calc(100% - 50px)"
    }
}