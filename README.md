# react-theme-eclipse
Implement in your React App a Responsive Theme Component easily

![gif](/how_looks_like.gif)


# Clone repository

~~~
git clone https://github.com/marceb1296/react-theme-eclipse.git
~~~

# Quick Start

~~~
import { Theme } from "react-theme-eclipse"
import "react-theme-eclipse/style"

// only if you're using typescript and need types 
import { ETheme, ... } from "react-theme-eclipse/types"


export const YourComponent = () => {
    // ...other code

    // Can be a selector from redux or a state
    const theme ...

    /**
        * Dispatch can be used directly
        * Function that dispatch the change of the current theme, takes 'theme' as parameter
    */

    
    return (
        // ..other jsx

        /**
            * setTheme() redux | reduxjs/toolkit reducer action
            * setTheme() react SetStateAction
        */
        <Theme initialValue={theme} dispatch={(theme: ETheme) => dispatch(setTheme(theme)) | setTheme(theme)}/>
        
        // ..other jsx
    )
}
~~~

# How to use it

Attributes:

_Required attributes *_

- ligthColor: string - Color to set when theme is ligth, default = white
- darkColor: string - Color to set when theme is dark, default = black
- position: string - Position where component will be displayed [ start, center, end ] default = end
- asNavIcon: boolean - return an Icon to use for example in an Navigation, 25px x 23px 
- dispatch: (theme: ETheme = "light" | "dark") => void - Function that dispatch or set the new theme, is called like 'dispatch(theme)'


