import React, { useState, useEffect } from 'react';
import { ESetTheme, ETheme, ITheme } from '../types';
import "../css/themes.scss"
import { getPosition } from '../core';
import { MoonIcon, SunIcon } from '../svg';

// Add transition
document.body.style.transition = "background-color .3s ease"

export const Theme = ({lightColor = "#fff", darkColor = "#000", position, initialValue, dispatch, asNavIcon = false}: ITheme) => {
    
    const [theme, setTheme] = useState(initialValue);

    const handleClick = () => {
        if (theme === ETheme.LIGHT) {
            setTheme(ETheme.DARK);         
            dispatch(ETheme.DARK);
            return 
        }
        
        setTheme(ETheme.LIGHT);         
        dispatch(ETheme.LIGHT); 
        
    }

    useEffect(() => {
        if (theme === ETheme.DARK) {
          document.body.style.backgroundColor = darkColor;
        } else {
          document.body.style.backgroundColor = lightColor;
        }
    }, [theme, darkColor, lightColor])
    

    if (asNavIcon) return (
        <div className='theme-icon' style={{
            boxShadow: theme === ETheme.LIGHT ? `0 0 0 0 transparent` : `1px 1px 4px 0px ${lightColor}`
        }}>
            <div aria-label="theme-handler" onClick={handleClick} className={
                theme === ETheme.LIGHT ? "btn-theme as-nav" : "btn-theme as-nav active"
            }>    
                <SunIcon />
                <MoonIcon /> 
            </div>
        </div>
    )

    return (  
        <div className='theme' style={getPosition(position)}>
            <div className='theme-container' style={{
                    boxShadow: theme === ETheme.LIGHT ? `0 0 0 0 transparent` : `1px 1px 4px 0px ${lightColor}`
                }}>
                <div aria-label="theme-handler" onClick={handleClick} className={
                    theme === ETheme.LIGHT ? "btn-theme" : "btn-theme active"
                }>    
                    <SunIcon />
                    <MoonIcon /> 
                </div>
            </div>
        </div>
    );
}
