import React, { useState, useEffect } from 'react';
import { ESetTheme, ETheme, ITheme } from '../types';
import "../css/themes.scss"
import { getPosition } from '../core';
import { MoonIcon, SunIcon } from '../svg';


const initialValue: ETheme = localStorage.getItem('theme') as ETheme || ETheme.LIGHT;


export const Theme = ({lightColor = "#fff", darkColor = "#000", position, dispatch}: ITheme) => {

    const [theme, setTheme] = useState(initialValue);

    const handleClick = () => {
        if (theme === ETheme.LIGHT) {

            setTheme(ETheme.DARK);         
            dispatch({
                type: ESetTheme.SET_MENU,
                payload: ETheme.DARK
            });
            return 
        }
        
        setTheme(ETheme.LIGHT);         
        dispatch({
            type: ESetTheme.SET_MENU,
            payload: ETheme.LIGHT
        }); 
        
    }

    useEffect(() => {
        document.body.style.transition = "background-color .3s ease-in-out"

        if (theme === ETheme.DARK) {
          document.body.style.backgroundColor = darkColor;
        } else {
          document.body.style.backgroundColor = lightColor;
        }
    }, [theme, darkColor, lightColor])


    return (  
        <div className='theme'>
            <div className='theme-container' style={{
                    ...getPosition(position),
                    boxShadow: theme === ETheme.LIGHT ? `0 0 0 0 transparent` : `1px 1px 4px 0px ${lightColor}`
                }}>
                <div onClick={handleClick} className={
                    theme === ETheme.LIGHT ? "btn-theme" : "btn-theme active"
                }>    
                    <SunIcon />
                    <MoonIcon /> 
                </div>
            </div>
        </div>
    );
}
