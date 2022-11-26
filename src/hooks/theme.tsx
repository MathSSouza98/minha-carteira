import React,{createContext, useState, useContext} from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ITheme{
    title: string;
        
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
    },
}

interface IProps{
    children : React.ReactNode
}

interface IThemeContext{
    toggleTheme(): void;
    theme: ITheme;
}


const UseThemes = createContext<IThemeContext>({} as IThemeContext)

const ThemeProvider: React.FC<IProps> = ({children}) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const getThemes = localStorage.getItem('@minha-carteira:theme')

            if(getThemes){
                return JSON.parse(getThemes)
            
            }else{
                return dark
            }
    })
    
    function toggleTheme(){
        if(theme.title === 'dark'){
            setTheme(light)
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(light))
        }else{
            setTheme(dark)
            localStorage.setItem('@minha-carteira:theme',JSON.stringify(dark))
        }
    }
    
    return(
        <UseThemes.Provider value={{toggleTheme, theme}}>
            {children}
        </UseThemes.Provider>
    );

}

function useTheme():IThemeContext{
    const context = useContext(UseThemes)
    return context;
}

export {ThemeProvider, useTheme}