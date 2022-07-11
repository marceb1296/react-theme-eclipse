import React, { useState, useEffect } from 'react';
import "../css/themes.scss"


const initialValue = localStorage.getItem('theme') || 'ligth';


const Theme = ({ligthColor, darkColor, position, dispatch}) => {

    const [theme, setTheme] = useState(initialValue);

    if (dispatch === undefined) {
        throw new Error("Theme Component needs a dispatch function! [ useReducer | react-redux ]");
    }

    const handleClick = () => {
        if (theme === 'ligth') {
            setTheme('dark');         
            dispatch({
                type: 'SET THEME',
                payload: 'dark'
            })
        } else {
            setTheme('ligth');         
            dispatch({
                type: 'SET THEME',
                payload: 'ligth'
            })        
        }
    }

    useEffect(() => {
        document.body.style.transition = "all 1s ease-in-out"
        if (theme === 'dark') {
          document.body.style.backgroundColor = darkColor;
        } else {
          document.body.style.backgroundColor = ligthColor;
        }
    }, [theme, darkColor, ligthColor])

    const getPosition = (position) => {
        if (position === "start") {
            return {
                justifyContent: "flex-start",
                marginLeft: "6vw"
            }
        } else if (position === "center") {
            return {
                justifyContent: "center"
            }
        } else if (position === "end") {
            return {
                justifyContent: "flex-end",
                marginRight: "6vw"
            }
        } else {
            return {
                justifyContent: "flex-end",
                marginRight: "6vw"
            }
        }
    }


    return (  
        <div className='themes' style={getPosition(position)}>
            <div className='container'>
                <div onClick={handleClick} className={
                    theme === "ligth" ? "btn-theme" : "btn-theme active"
                }>                 
                    <img src='/sun.png' alt="sun"></img>
                    <img style={{
                        boxShadow: theme === "ligth" ? `0px 0px 0px 0px ${ligthColor}` : `1px 1px 4px 0px ${ligthColor}`
                    }} src='/moon.png' alt="moon"></img>
                </div>
            </div>
        </div>
    );
}
 
export default Theme;
