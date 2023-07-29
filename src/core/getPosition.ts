import { EPosition } from "../types"

export const getPosition = (position: string | undefined) => {
    if (position === EPosition.START) {
        return {
            left: "10%"
        }
    } 
    
    if (position === EPosition.CENTER) {
        return {
            left: "50%"
        }
    } 
    
    if (position === EPosition.END) {
        return {
            left: "90%"
        }
    } 
        
    return {
        left: "90%"
    }
}