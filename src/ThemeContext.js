import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children}) => {
    const [theme, setTheme] = useState("light")
    return (
        <ThemeContext
            value={{
                theme,
                toggleTheme : () => setTheme(theme === "light" ? "dark" : "light"),

            }}
            >
                {children}
        </ThemeContext>
    );
};
export const useTheme = () => useContext(ThemeContext);
